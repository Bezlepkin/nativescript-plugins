import { PhotoEditor } from '@bezlepkin/nativescript-photo-editor';
import {
  PhotoEditorOptions,
  PhotoEditorException,
} from '@bezlepkin/nativescript-photo-editor/common';
import { DemoSharedNativescriptPhotoEditor } from '@demo/shared';
import { EventData, ImageSource, Page } from '@nativescript/core';

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

      const options: PhotoEditorOptions = { image: imageSource };
      const imageAsset = await this._photoEditor.editPhoto(options);
    } catch (e) {
      console.error(e.message);
    }
  }
}
