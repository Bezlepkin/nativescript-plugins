import { File, ImageSource } from '@nativescript/core';

export function getVideoThumbnail(filepath: string): Promise<ImageSource> {
  return new Promise((resolve, reject) => {
    try {
      if (!File.exists(filepath)) {
        throw new Error(`File ${filepath} not found`);
      }

      const asset = AVAsset.assetWithURL(NSURL.fileURLWithPath(filepath));
      const time = CMTimeMakeWithSeconds(1, 600);
      const imageGenerator = AVAssetImageGenerator.assetImageGeneratorWithAsset(asset);
      imageGenerator.appliesPreferredTrackTransform = true;

      if (parseFloat(UIDevice.currentDevice.systemVersion) < 16) {
        const image = UIImage.imageWithCGImage(imageGenerator.copyCGImageAtTimeActualTimeError(time, null));
        resolve(new ImageSource(image));
      } else {
        UIImage.imageWithCGImage(
          imageGenerator.generateCGImageAsynchronouslyForTimeCompletionHandler(time, (image, time, err: NSError): void => {
            if (err) {
              return reject(`Error getting thumbnail from video. ${err}`);
            }

            resolve(new ImageSource(UIImage.imageWithCGImage(image)));
          })
        );
      }
    } catch (err) {
      reject(`Error getting thumbnail from video. ${err.message}`);
    }
  });
}
