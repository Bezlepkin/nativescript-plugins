import { Observable } from '@nativescript/core';

export type KeyboardOpenedEventData = {
  height?: number;
};
export abstract class KeyboardOpeningCommon extends Observable {
  protected currHeight: number = 0;

  protected sendEvent(eventName: string, data: KeyboardOpenedEventData): void {
    this.notify({ eventName, data: data || {} });
  }
}
