import { AndroidActivityResultEventData, Application, File, ImageSource, knownFolders, path } from '@nativescript/core';
import { EditPhotoOptions, PhotoEditorCommon, PhotoEditorException } from './common';

declare const com: any;

export class PhotoEditor extends PhotoEditorCommon {
  private static readonly EDIT_PHOTO_REQUEST = 9090;

  private tempFilepath: string;
  private currentResolve: (result: ImageSource) => void;
  private currentReject: (e: Error) => void;

  editPhoto(options: EditPhotoOptions): Promise<ImageSource> {
    if (!options.imageSource) {
      throw new PhotoEditorException('Required option "imageSource" no passed');
    }

    options.hiddenControls = options.hiddenControls || [];

    return new Promise<ImageSource>((resolve, reject) => {
      this.currentResolve = resolve;
      this.currentReject = reject;
      this.tempFilepath = path.join(knownFolders.temp().path, `${Math.floor(new Date().getTime() / 1000)}.jpg`);
      options.imageSource.saveToFile(this.tempFilepath, 'jpg');

      const intent = new android.content.Intent(Application.android.foregroundActivity, com.bezlepkin.photoeditor.PhotoEditorActivity.class);
      intent.putExtra('imagePath', this.tempFilepath);
      //intent.putExtra('isCropIn', options.hiddenControls.indexOf(PhotoEditorControl.Crop) === -1);
      //intent.putExtra('isDrawIn', options.hiddenControls.indexOf(PhotoEditorControl.Draw) === -1);
      //intent.putExtra('isTextIn', options.hiddenControls.indexOf(PhotoEditorControl.Text) === -1);
      //intent.putExtra('isSaveIn', false);
      // intent.putExtra('isClearIn', options.hiddenControls.indexOf(PhotoEditorControl.Clear) === -1);
      Application.android.foregroundActivity.startActivityForResult(intent, PhotoEditor.EDIT_PHOTO_REQUEST);
      Application.android.on('activityResult', this.onActivityResult);
    });
  }

  private onActivityResult = (args: AndroidActivityResultEventData) => {
    if (args.requestCode === PhotoEditor.EDIT_PHOTO_REQUEST) {
      switch (args.resultCode) {
        case android.app.Activity.RESULT_OK:
          const resultIntent: android.content.Intent = args.intent;
          const filepath = resultIntent.getExtras().getString('filepath');
          const imageSource = ImageSource.fromFileSync(filepath);

          File.fromPath(filepath).removeSync();

          this.currentResolve(imageSource);
          break;

        case android.app.Activity.RESULT_CANCELED:
          this.currentResolve(void 0);
          break;

        default:
          this.currentReject(new PhotoEditorException(`There was an unknown error while editing a photo with code: ${args.resultCode}`));
          break;
      }

      // Cleanup source temp file
      if (this.tempFilepath && File.exists(this.tempFilepath)) {
        File.fromPath(this.tempFilepath).removeSync();
      }

      // Cleanup events & current vars
      this.tempFilepath = undefined;
      this.currentResolve = undefined;
      this.currentReject = undefined;
      Application.android.off('activityResult', this.onActivityResult);
    }
  };
}
