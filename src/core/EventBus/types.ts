/* eslint-disable @typescript-eslint/no-empty-interface */
export interface EventBusArgInterface {
  [key: string]: string;
}

export interface EventBusArgsInterface extends Array<EventBusArgInterface> {}
