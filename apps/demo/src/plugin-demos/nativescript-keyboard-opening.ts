import { Observable, EventData, Page, isAndroid, Application } from '@nativescript/core';
import { DemoSharedNativescriptKeyboardOpening } from '@demo/shared';
import { nativescriptKeyboardOpening } from '@bezlepkin/nativescript-keyboard-opening';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();

  if (isAndroid) {
    var window = Application.android.startActivity.getWindow();
    window.adfadfd;
    window.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
  }
}

export class DemoModel extends DemoSharedNativescriptKeyboardOpening {
  constructor() {
    super();
    nativescriptKeyboardOpening().on('opened', (args: any) => {
      console.log('opened', args);
    });

    nativescriptKeyboardOpening().on('changed', (args: EventData) => {
      console.log('changed', args);
    });

    nativescriptKeyboardOpening().on('closed', (args: any) => {
      console.log('closed', args);
    });
  }
}
