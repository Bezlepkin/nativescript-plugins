import { AndroidActivityResultEventData, Application, File, ImageAsset, knownFolders, path } from '@nativescript/core';
import { PhotoEditorCommon, PhotoEditorError, PhotoEditorOptions } from './common';

declare const com: any;

export class PhotoEditor extends PhotoEditorCommon {
  private static readonly EDIT_PHOTO_REQUEST = 9090;

  private _tempFilepath: string;
  private _currentResolve: (result: ImageAsset) => void;
  private _currentReject: (e: Error) => void;

  editPhoto(options: PhotoEditorOptions): Promise<ImageAsset> {
    if (!options.image) {
      throw new PhotoEditorError('Required option "image" no passed');
    }

    return new Promise<ImageAsset>((resolve, reject) => {
      this._currentResolve = resolve;
      this._currentReject = reject;
      this._tempFilepath = path.join(knownFolders.temp().path, `${Math.floor(new Date().getTime() / 1000)}.jpg`);

      options.image.saveToFile(this._tempFilepath, 'jpg');

      const intent = new android.content.Intent(Application.android.foregroundActivity, com.bezlepkin.photoeditor.PhotoEditorActivity.class);
      intent.putExtra('imagePath', this._tempFilepath);

      Application.android.foregroundActivity.startActivityForResult(intent, PhotoEditor.EDIT_PHOTO_REQUEST);
      Application.android.on('activityResult', this._onActivityResult);
    });
  }

  private _onActivityResult = (args: AndroidActivityResultEventData) => {
    if (args.requestCode === PhotoEditor.EDIT_PHOTO_REQUEST) {
      switch (args.resultCode) {
        case android.app.Activity.RESULT_OK:
          const resultIntent: android.content.Intent = args.intent;
          const filepath = resultIntent.getExtras().getString('filepath');
          this._currentResolve(new ImageAsset(filepath));
          break;

        case android.app.Activity.RESULT_CANCELED:
          this._currentResolve(void 0);
          break;

        default:
          this._currentReject(new PhotoEditorError(`There was an unknown error while editing a photo with code: ${args.resultCode}`));
          break;
      }

      // Cleanup source temp file
      if (this._tempFilepath && File.exists(this._tempFilepath)) {
        File.fromPath(this._tempFilepath).removeSync();
      }

      // Cleanup events & current vars
      this._tempFilepath = undefined;
      this._currentResolve = undefined;
      this._currentReject = undefined;
      Application.android.off('activityResult', this._onActivityResult);
    }
  };
}
