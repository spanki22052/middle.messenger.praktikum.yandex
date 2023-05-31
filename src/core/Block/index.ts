import EventBus from "../EventBus";
import {
  EventInterface,
  EVENTS,
  MetaInterface,
  MetaPropsInterface,
  RenderElementProps,
} from "./types";
import setStyles from "../../utils/setStyles";
import { nanoid } from "nanoid";
import Handlebars = require("handlebars");

export default class Block {
  static EVENTS = EVENTS;

  id = nanoid(6);
  eventBus;
  _meta: MetaInterface;
  element: HTMLElement;
  props: MetaPropsInterface;
  _updating: boolean;
  children: RenderElementProps;
  eventsList: EventInterface | undefined;

  constructor(
    tagName: string = "div",
    props: MetaPropsInterface = {},
    renderProps: RenderElementProps = {},
    events?: EventInterface
  ) {
    this.eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };
    this.children = renderProps;
    this.eventsList = events;
    this._registerEvents();
    this.eventBus.emit(Block.EVENTS.INIT);
    this.props = this._makePropsProxy(props);
  }

  dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _registerEvents() {
    this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDU, this.componentDidUpdate.bind(this));
  }

  _createResources() {
    this.element = document.createElement(this._meta.tagName);
  }

  init() {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidUpdate() {
    if (!this._updating) {
      this._updating = true;
      this.eventBus.emit(Block.EVENTS.FLOW_CDU);

      this._updating = false;
    }
  }

  setProps(el: MetaPropsInterface) {
    this.props = { ...this.props, ...el };
    if (Object.keys(el).includes("className"))
      this.element.classList.add(el.className || "");
    if (Object.keys(el).includes("styles"))
      setStyles(this.element, el.styles || {});
    if (Object.keys(el).includes("name")) {
      this.element.setAttribute("name", el.name || "");
    }
    this.componentDidUpdate();
  }

  _componentDidMount(props: MetaPropsInterface) {
    this.componentDidMount(props);
  }

  componentDidMount(_props: MetaPropsInterface) {}

  _render() {
    const renderResult: any = this.render();
    this._removeEvents();
    const newElement = renderResult?.firstElementChild;
    this.element?.replaceWith(newElement);
    this.element = newElement as HTMLElement;
    this._addEvents();
  }

  render() {}

  private _makePropsProxy(props: Record<string, any>): Record<string, any> {
    return new Proxy(props, {
      set: (target, prop: string, value) => {
        if (prop in target) {
          const oldValue = target[prop];
          target[prop] = value;

          if (oldValue !== value) {
            this.eventBus.emit(
              Block.EVENTS.FLOW_CDU,
              target,
              prop,
              value,
              oldValue
            );
          }
        } else {
          throw new Error(`Не существует такого события ${prop}`);
        }

        return true;
      },
      deleteProperty: () => {
        throw new Error(
          "Не можем удалить такое событие так как его не существует"
        );
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  compile(incomingTemplate: string): DocumentFragment {
    const properties: any = { ...this._meta.props };
    Object.entries(this.children).forEach(([key, value]) => {
      properties[key] = `<div data-id="${value.id}"></div>`;
    });
    const createdTemplate = document.createElement("template");

    const compiledTemplate = Handlebars.compile(incomingTemplate);
    createdTemplate.innerHTML = compiledTemplate({
      ...this.props,
      children: this.children,
      ...properties,
    });

    Object.entries(this.children).forEach(([, child]) => {
      const selectedElement = createdTemplate.content.querySelector(
        `[data-id="${child.id}"]`
      );

      if (!selectedElement) {
        return;
      }

      const selectedElementChildren = selectedElement.childNodes.length
        ? selectedElement.childNodes
        : [];

      const content = child.getContent();
      selectedElement.replaceWith(content);

      const layoutContent = content?.querySelector('[data-layout="1"]');
      if (layoutContent && selectedElementChildren.length) {
        layoutContent.append(...Array.from(selectedElementChildren));
      }
    });

    return createdTemplate.content;
  }

  _removeEvents() {
    const events = this.eventsList;

    if (!events || !this.element) {
      return;
    }

    Object.keys(events).forEach((event) => {
      if (this.element) {
        this.element?.removeEventListener(event, events[event]);
      }
    });
  }

  _addEvents() {
    const events = this.eventsList;
    console.log(events);

    if (!events) {
      return;
    }

    Object.keys(events).forEach((event) => {
      if (this.element) {
        this.element!.addEventListener(event, events[event], true);
      }
    });
  }

  getContent(): HTMLElement {
    if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      setTimeout(() => {
        if (
          this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
        ) {
          this.eventBus.emit(Block.EVENTS.FLOW_CDM);
        }
      }, 100);
    }

    return this.element!;
  }
  show() {
    this.element.style.display = "block";
  }

  hide() {
    this.element.style.display = "none";
  }
}
