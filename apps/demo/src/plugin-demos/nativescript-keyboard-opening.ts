import { Observable, EventData, Page, isAndroid, Application } from '@nativescript/core';
import { DemoSharedNativescriptKeyboardOpening } from '@demo/shared';
import { keyboardOpening } from '@bezlepkin/nativescript-keyboard-opening';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();

  if (isAndroid) {
    var window = Application.android.startActivity.getWindow();
    window.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
  }
}

export class DemoModel extends DemoSharedNativescriptKeyboardOpening {
  constructor() {
    super();
    keyboardOpening().on('opened', (args: any) => {
      console.log('opened', args);
    });

    keyboardOpening().on('changed', (args: EventData) => {
      console.log('changed', args);
    });

    keyboardOpening().on('closed', (args: any) => {
      console.log('closed', args);
    });
  }
}
