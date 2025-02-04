import { File, ImageSource } from '@nativescript/core';

export function getVideoThumbnail(filepath: string): Promise<ImageSource> {
  return new Promise((resolve, reject) => {
    try {
      if (!File.exists(filepath)) {
        throw new Error(`File ${filepath} not found`);
      }

      let retriever = new android.media.MediaMetadataRetriever();
      retriever.setDataSource(filepath);
      let time = retriever.extractMetadata(android.media.MediaMetadataRetriever.METADATA_KEY_DURATION);
      let duration = parseInt(time) / 1000;
      const bitmap = retriever.getFrameAtTime(duration, android.media.MediaMetadataRetriever.OPTION_CLOSEST);

      resolve(new ImageSource(bitmap));
    } catch (err) {
      reject(`Error getting thumbnail from video. ${err.message}`);
    }
  });
}
