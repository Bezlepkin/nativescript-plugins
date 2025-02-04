import {} from '@bezlepkin/nativescript-video-thumbnail';
import { DemoSharedNativescriptVideoThumbnail } from '@demo/shared';
import { EventData, Page } from '@nativescript/core';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptVideoThumbnail {}
