/* eslint-disable @typescript-eslint/no-explicit-any */
import { EventBusArgsInterface } from "./types";

export default class EventBus {
  listeners: { [key: string]: Array<(args: EventBusArgsInterface) => void> };

  constructor() {
    this.listeners = {};
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event: string, callback: (args: any) => void) {
    if (!this.listeners[event]) this.listeners[event] = [];

    this.listeners[event].push(callback);
  }

  off(event: string, callback: (args: EventBusArgsInterface) => void) {
    if (!this.listeners[event]) throw new Error(`Нет такого события ${event}`);

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  delete(event: string) {
    delete this.listeners[event];
  }

  emit(event: string, ...args: any[]) {
    if (!this.listeners[event]) throw new Event(`Нет такого события ${event}`);

    this.listeners[event].forEach((listener) => listener(args));
  }
}
