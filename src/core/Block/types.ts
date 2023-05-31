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
  activeChat?: ActiveChat;
  messages: Message[];
  name?: string;
  styles?: StylesType;
  amount?: number;
  type?: string;
  href?: string;
  chosenUser?: User;
  user?: User;
  time?: string;
  message?: string;
  link?: string;
  path?: string;
  onFinish?: () => void;
  noName?: boolean;
  events?: FormEventsInterface;
  error?: any;
  value?: any;
  id?: number | string;
  label?: string;
  placeholder?: string;
  users: any[];
  selectedUsers: any[];
}

export interface EventInterface {
  [key: string]: any;
}

interface User {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string | null;
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string | null;
}

interface ChosenUser {
  id: number;
  display_name: string;
  avatar: string | null;
}

interface Chat {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: User;
    time: string;
    content: string;
  };
}

export interface Message {
  id: number;
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
}

interface ActiveChat {
  id: number;
  title: string;
  avatar: string | null;
  messages: Message[] | [];
  groupChat: boolean;
}

export interface StateInterface {
  isAuth: boolean;
  user: null | User;
  chats: Chat[];
  messages: { [key: string]: Message[] };
  activeChat: null | ActiveChat;
  chosenUser: null | ChosenUser;
  noChats: boolean;
}
