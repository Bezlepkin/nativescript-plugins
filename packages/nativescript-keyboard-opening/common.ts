import { Observable } from '@nativescript/core';

export type KeyboardOpenedEventData = {
  height?: number;
};
export abstract class NativescriptKeyboardOpeningCommon extends Observable {
  protected currHeight: number = 0;

  protected sendEvent(eventName: string, data: KeyboardOpenedEventData): void {
    this.notify({ eventName, data: data || {} });
  }
}
