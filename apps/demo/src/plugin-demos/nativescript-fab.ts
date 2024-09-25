import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptFab } from '@demo/shared';
import {} from '@bezlepkin/nativescript-fab';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptFab {}
