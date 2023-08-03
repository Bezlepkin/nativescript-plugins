import { Frame, Screen } from '@nativescript/core';
import { KeyboardOpeningCommon } from './common';

let KeyboardOpeningInstance: KeyboardOpeningManager;

class KeyboardOpeningManager extends KeyboardOpeningCommon {
  constructor() {
    super();
    this.trackKeyboard();
  }

  private trackKeyboard(): void {
    if (!Frame.topmost() || (Frame.topmost() && !Frame.topmost().currentPage)) {
      setTimeout(() => {
        this.trackKeyboard();
      }, 100);
      return;
    }

    Frame.topmost()
      .currentPage.android.getViewTreeObserver()
      .addOnGlobalLayoutListener(
        new android.view.ViewTreeObserver.OnGlobalLayoutListener({
          onGlobalLayout: () => {
            const rect = new android.graphics.Rect();
            const currPage = Frame.topmost().currentPage.android;
            currPage.getWindowVisibleDisplayFrame(rect);
            const screenHeight = currPage.getRootView().getHeight();
            const missingSize = screenHeight - rect.bottom;
            const height = missingSize / Screen.mainScreen.scale;

            if (missingSize > screenHeight * 0.15) {
              if (this.currHeight === 0) {
                this.sendEvent('opened', { height });
              } else {
                this.sendEvent('changed', { height });
              }

              this.currHeight = height;
            } else if (!!this.currHeight) {
              this.sendEvent('closed', {});
              this.currHeight = 0;
            }
          },
        })
      );
  }
}

export const keyboardOpening = function (): KeyboardOpeningManager {
  if (KeyboardOpeningInstance) {
    return KeyboardOpeningInstance;
  }

  KeyboardOpeningInstance = new KeyboardOpeningManager();

  return KeyboardOpeningInstance;
};
