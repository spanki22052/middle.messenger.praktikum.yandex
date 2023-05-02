import { StylesType } from "../../utils/setStyles";
import { FormEventsInterface } from "../formEvents/types";

export enum EVENTS {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_CDU = "flow:component-did-update",
  FLOW_RENDER = "flow:render",
}

export interface MetaInterface {
  tagName: string;
  props: MetaPropsInterface;
}

export interface RenderElementProps {
  [key: string]: any;
}

export interface MetaPropsInterface {
  text?: string;
  className?: string;
  name?: string;
  styles?: StylesType;
  amount?: number;
  type?: string;
  href?: string;
  time?: string;
  message?: string;
  link?: string;
  onFinish?: () => void;
  noName?: boolean;
  events?: FormEventsInterface;
  error?: any;
  value?: any;
  id?: number | string;
  label?: string;
  placeholder?: string;
}

export interface EventInterface {
  [key: string]: any;
}
