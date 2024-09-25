import { Frame, ImageAsset, ImageSource } from '@nativescript/core';
import { EditPhotoOptions, PhotoEditorCommon, PhotoEditorControl } from './common';

export class PhotoEditor extends PhotoEditorCommon {
  private _delegate: PhotoEditorDelegateImpl;

  constructor() {
    super();
  }

  public editPhoto(options: EditPhotoOptions) {
    try {
      const photoEditorViewController = PhotoEditorViewController.alloc().init();

      return new Promise<ImageSource>((resolve, reject) => {
        this._delegate = PhotoEditorDelegateImpl.initWithOwner(new WeakRef(this), resolve, reject);
        photoEditorViewController.image = options.imageSource.ios;
        photoEditorViewController.photoEditorDelegate = this._delegate;

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

            photoEditorViewController.modalPresentationStyle = UIModalPresentationStyle.FullScreen;
            viewController.presentViewControllerAnimatedCompletion(photoEditorViewController, true, null);
          }
        }
      });
    } catch (e) {
      console.error(`PhotoEditor plugin error: ${e.message}`);
    }
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
