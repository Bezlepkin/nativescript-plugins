import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptKeyboardOpening } from '@demo/shared';
import {} from 'nativescript-keyboard-opening';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptKeyboardOpening {}
