import { PhotoEditor } from '@bezlepkin/nativescript-photo-editor';
import {
  EditPhotoOptions,
  PhotoEditorException,
} from '@bezlepkin/nativescript-photo-editor/common';
import { DemoSharedNativescriptPhotoEditor } from '@demo/shared';
import { EventData, ImageSource, Page } from '@nativescript/core';
// import * as imagePicker from '@nativescript/imagepicker';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptPhotoEditor {
  imageSource = '';
  private _photoEditor: PhotoEditor;

  get image(): string {
    return this.imageSource;
  }

  constructor() {
    super();
    this._photoEditor = new PhotoEditor();
  }

  async onSelectPhotoTap(): Promise<void> {
    try {
      const imageSource = await ImageSource.fromUrl(
        'https://safarisafricana.com/wp-content/uploads/2019/12/malaria-free-safaris.jpg',
      );

      const options: EditPhotoOptions = { imageSource };
      await this._photoEditor.editPhoto(options);
      this.imageSource =
        'https://safarisafricana.com/wp-content/uploads/2019/12/malaria-free-safaris.jpg';
      console.log(this.imageSource);
    } catch (e) {
      console.log(e instanceof PhotoEditorException);
      console.error(e);
    }

    return;
    //const imagePickerInstance: imagePicker.ImagePicker = imagePicker.create({
    // mode: 'single',
    // });
    /*
    try {
      //const authResult = await imagePickerInstance.authorize();
      //if (authResult.authorized) {
      imagePickerInstance.present().then((selection) => {
        selection.forEach(async (selected) => {
          const imageSource = await ImageSource.fromAsset(selected.asset);
          setTimeout(() => {
            const options: EditPhotoOptions = { imageSource: imageSource };
            this._photoEditor.editPhoto(options);
          }, 1500);
        });
      });
      //} else {
      //  throw new Error('process authorization not granted');
      //}
    } catch (e) {
      console.error(`An error occurred when selecting a photo: ${e.message}`);
    }
    */
  }
}
