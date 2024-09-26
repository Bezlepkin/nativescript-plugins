import { Application, Frame, ImageAsset, ImageSource } from '@nativescript/core';
import { PhotoEditorCommon, PhotoEditorException, PhotoEditorOptions } from './common';

export class PhotoEditor extends PhotoEditorCommon {
  private _delegate: PhotoEditorDelegateImpl;

  constructor() {
    super();
  }

  public editPhoto(options: PhotoEditorOptions) {
    try {
      if (!options.image) {
        throw new Error('Required option "image" no passed');
      }

      const photoEditorViewController = PhotoEditorViewController.alloc().init();

      return new Promise<ImageAsset>((resolve, reject) => {
        this._delegate = PhotoEditorDelegateImpl.initWithOwner(new WeakRef(this), resolve, reject);

        photoEditorViewController.image = options.image.ios;
        photoEditorViewController.photoEditorDelegate = this._delegate;

        let viewController = Application.ios.rootController;

        while (viewController && viewController.presentedViewController) {
          viewController = viewController.presentedViewController;
        }

        photoEditorViewController.modalPresentationStyle = UIModalPresentationStyle.FullScreen;
        viewController.presentViewControllerAnimatedCompletion(photoEditorViewController, true, null);
      });
    } catch (e) {
      throw new PhotoEditorException(`PhotoEditor plugin error occurred. ${e.message}`);
    }
  }
}

@NativeClass
class PhotoEditorDelegateImpl extends NSObject implements PhotoEditorDelegate {
  private _resolve: (image: ImageAsset) => void;
  private _reject: (e: Error) => void;
  private _owner: WeakRef<PhotoEditor>;
  static ObjCProtocols = [PhotoEditorDelegate];

  public static initWithOwner(owner: WeakRef<PhotoEditor>, resolve: (image: ImageAsset) => void, reject: (e: Error) => void): PhotoEditorDelegateImpl {
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
    const imageSource = new ImageSource();
    imageSource.setNativeSource(image);
    this._resolve(new ImageAsset(imageSource.ios));
  }
}
