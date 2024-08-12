/*! *****************************************************************************
Copyright (c) 2019 Tangra Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
***************************************************************************** */
import { Frame, ImageAsset, ImageSource } from '@nativescript/core';
import { EditPhotoOptions, PhotoEditorCommon, PhotoEditorControl } from './common';

export class PhotoEditor extends PhotoEditorCommon {
  //private _bundle: NSBundle;
  // private _delegate: PhotoEditorDelegateImpl;

  constructor() {
    super();

    //this._bundle = NSBundle.bundleForClass(PhotoEditorViewController.class());
  }

  public editPhoto(options: EditPhotoOptions) {
    try {
      const photoEditorViewController = PhotoEditorViewController.alloc().init();
      // const nativeHiddenControls: control[] = [control.Sticker, control.Share, control.Save];

      options.hiddenControls = options.hiddenControls || [];
      /*
      for (const hiddenControl of options.hiddenControls) {
        switch (hiddenControl) {
          case PhotoEditorControl.Crop:
            nativeHiddenControls.push(control.Crop);
            break;

          case PhotoEditorControl.Draw:
            nativeHiddenControls.push(control.Draw);
            break;

          case PhotoEditorControl.Text:
            nativeHiddenControls.push(control.Text);
            break;

          // case PhotoEditorControl.Save:
          //     nativeHiddenControls.push(control.Save);
          //     break;

          case PhotoEditorControl.Clear:
            nativeHiddenControls.push(control.Clear);
            break;

          default:
            throw new Error(`Unknown control sent: ${hiddenControl}!`);
        }
      }
      */
      return new Promise<ImageSource>((resolve, reject) => {
        // this._delegate = PhotoEditorDelegateImpl.initWithOwner(new WeakRef(this), resolve, reject);
        photoEditorViewController.image = options.imageSource.ios;
        // photoEditorViewController.hiddenControls = nativeHiddenControls as any;
        // photoEditorViewController.photoEditorDelegate = this._delegate;

        let viewController: UIViewController;
        let topMostFrame = Frame.topmost();

        if (topMostFrame) {
          viewController = topMostFrame.currentPage && topMostFrame.currentPage.ios;

          if (viewController) {
            while (viewController.parentViewController) {
              // find top-most view controler
              viewController = viewController.parentViewController;
            }
            while (viewController.presentedViewController) {
              // find last presented modal
              viewController = viewController.presentedViewController;
            }
            if (this.isPresentingModally()) {
              console.log(viewController); // but here <iOSPhotoEditor.PhotoEditorViewController: 0x7fce9b036600>
            } else {
              console.log(viewController);
            }
            // viewController = UIApplication.sharedApplication.keyWindow.rootViewController;
            viewController.presentViewControllerAnimatedCompletion(photoEditorViewController, true, () => {
              console.log('modal is open');
            });
          }
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  private isPresentingModally(): boolean {
    let viewController: UIViewController;
    const topMostFrame = Frame.topmost();

    if (topMostFrame) {
      viewController = topMostFrame.currentPage && topMostFrame.currentPage.ios;

      if (viewController) {
        while (viewController.parentViewController) {
          viewController = viewController.parentViewController;
        }

        return !!viewController.presentedViewController;
      }
    }

    return false;
  }
}

@NativeClass
class PhotoEditorDelegateImpl extends NSObject implements PhotoEditorDelegate {
  private _resolve: (imagesSource: ImageSource) => void;
  private _reject: (e: Error) => void;
  private _owner: WeakRef<PhotoEditor>;
  static ObjCProtocols = [PhotoEditorDelegate];

  public static initWithOwner(owner: WeakRef<PhotoEditor>, resolve: (imageSource: ImageSource) => void, reject: (e: Error) => void): PhotoEditorDelegateImpl {
    const delegate = <PhotoEditorDelegateImpl>PhotoEditorDelegateImpl.new();
    delegate._resolve = resolve;
    delegate._reject = reject;
    delegate._owner = owner;

    return delegate;
  }

  public canceledEditing() {
    this._reject(new Error('User cancelled edit.'));
  }

  public doneEditingWithImage(image: UIImage) {
    const result = new ImageSource();

    result.setNativeSource(image);

    this._resolve(result);
  }
}
