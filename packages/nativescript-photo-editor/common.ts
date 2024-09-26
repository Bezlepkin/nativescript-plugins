import { ImageSource, Observable } from '@nativescript/core';

export class PhotoEditorError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export type PhotoEditorOptions = {
  image: ImageSource;
};

export class PhotoEditorCommon extends Observable {}
