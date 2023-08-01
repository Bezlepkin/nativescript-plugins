import { Application } from '@nativescript/core';
import { NativescriptKeyboardOpeningCommon } from './common';

let KeyboardOpeningInstance: KeyboardOpeningManager;

class KeyboardOpeningManager extends NativescriptKeyboardOpeningCommon {
  constructor() {
    super();
    this.trackKeyboard();
  }

  private trackKeyboard(): void {
    Application.ios.addNotificationObserver(UIKeyboardWillChangeFrameNotification, (notification: NSNotification) => {
      const height = notification.userInfo.valueForKey(UIKeyboardFrameEndUserInfoKey).CGRectValue.size.height;

      if (!this.currHeight) {
        this.sendEvent('opened', { height });
        this.currHeight = height;

        return;
      }

      if (this.currHeight !== height) {
        this.currHeight = height;
        this.sendEvent('changed', { height });
      }
    });

    Application.ios.addNotificationObserver(UIKeyboardWillHideNotification, () => {
      this.sendEvent('closed', {});
      this.currHeight = 0;
    });
  }
}

export const nativescriptKeyboardOpening = function (): KeyboardOpeningManager {
  if (KeyboardOpeningInstance) {
    return KeyboardOpeningInstance;
  }

  KeyboardOpeningInstance = new KeyboardOpeningManager();

  return KeyboardOpeningInstance;
};
