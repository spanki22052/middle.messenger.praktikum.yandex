import EventBus from "../EventBus";
import {
  EventInterface,
  EVENTS,
  MetaInterface,
  MetaPropsInterface,
  RenderElementProps,
} from "./types";
import { nanoid } from "nanoid";
import Handlebars = require("handlebars");
import { PropsType } from "../../types";

export default class Block {
  static EVENTS = EVENTS;

  id = nanoid(6);
  eventBus: () => EventBus;
  _meta: MetaInterface;
  element: HTMLElement;
  props: MetaPropsInterface;
  _updating: boolean;
  children: RenderElementProps;
  eventsList: EventInterface | undefined;

  public constructor(
    tagName = "div",
    props: MetaPropsInterface = {},
    renderProps: RenderElementProps = {},
    events?: EventInterface
  ) {
    this.eventBus = () => new EventBus();
    this._meta = {
      tagName,
      props,
    };
    this.children = renderProps;

    this.eventsList = events;
    const eventBus = new EventBus();
    this._registerEvents(eventBus);
    this.eventBus = () => eventBus;
    eventBus.emit(Block.EVENTS.INIT);
    this.props = this._makePropsProxy(props);
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  _createResources() {
    this.element = document.createElement(this._meta.tagName);
  }

  init(eventBus: EventBus) {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props);
  }
  _componentDidUpdate(oldProps: PropsType, newProps: PropsType) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (this.props?.messages && this.props.messages.length > 0) {
      this.children = {
        ...this.children,
        messageComponents: this.props.messages.flat(),
      };
    }

    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(_oldProps: PropsType, _newProps: PropsType) {
    return true;
  }

  setProps = (nextProps: PropsType) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

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

  _makePropsProxy(props: PropsType): any {
    const self = this;

    return new Proxy(props, {
      get(target: PropsType, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target: Record<string, unknown>, prop: string, value: unknown) {
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error("You do not have access to this");
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  compile(Incomingtemplate: string): DocumentFragment {
    const properties: any = { ...this._meta.props };

    Object.entries(this.children).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        properties[key] = value.map(
          (child) => `<div data-id="${child?.id}"></div>`
        );
      } else {
        properties[key] = `<div data-id="${value?.id}"></div>`;
      }
    });
    const createdTemplate = document.createElement("template");

    const compiledTemplate = Handlebars.compile(Incomingtemplate);

    createdTemplate.innerHTML = compiledTemplate({
      children: this.children,
      ...properties,
    });

    const replaceCont = (blockComp: Block) => {
      if (!blockComp) return;

      const cont = createdTemplate.content.querySelector(
        `[data-id="${blockComp?.id}"]`
      );

      if (!cont) {
        return;
      }

      blockComp?.getContent().append(...Array.from(cont.childNodes));

      cont.replaceWith(blockComp.getContent());
    };

    Object.entries(this.children).forEach(([, blockComp]) => {
      if (Array.isArray(blockComp)) {
        blockComp.forEach(replaceCont);
      } else {
        replaceCont(blockComp);
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
          this.eventBus().emit(Block.EVENTS.FLOW_CDM);
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
