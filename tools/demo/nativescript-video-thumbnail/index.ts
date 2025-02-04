import { DemoSharedBase } from '../utils';
import { getVideoThumbnail } from '@bezlepkin/nativescript-video-thumbnail';
import * as perms from '@nativescript-community/perms';
import { Dialogs, ImageAsset, isIOS, isAndroid, ImageSource } from '@nativescript/core';
import * as videorecorder from '@bezlepkin/nativescript-videorecorder';
import * as imagepicker from '@nativescript/imagepicker';

class CameraPermissionRestrictedException extends Error {}
class MicrophonePermissionRestrictedException extends Error {}
export class MediaFilePermissionRestrictedException extends Error {}

export interface VideoRecorderOptions extends videorecorder.Options {}

export class DemoSharedNativescriptVideoThumbnail extends DemoSharedBase {
  private _thumbnail: ImageSource;

  constructor() {
    super();
  }

  get thumbnail(): ImageSource {
    return this._thumbnail;
  }

  set thumbnail(value: ImageSource) {
    if (this._thumbnail !== value) {
      this._thumbnail = value;
      this.notifyPropertyChange('thumbnail', value);
    }
  }

  async onTakeVideoFromCameraTap(): Promise<void> {
    const options: VideoRecorderOptions = {
      hd: true,
      saveToGallery: false,
      format: 'mp4',
      position: 'back',
      modalPresentationStyle: isIOS ? UIModalPresentationStyle.OverFullScreen : void 0,
    };

    const [err, result] = await this.getVideoFromCamera(options);

    if (!err) {
      try {
        const imageSource = await getVideoThumbnail(result.file);
        this.thumbnail = imageSource;
      } catch (err) {
        console.error(err);
      }
    }
  }

  async onTakeVideoFromGalleryTap(): Promise<void> {
    const options: imagepicker.Options = {
      mode: 'single',
      mediaType: 2,
    };

    const [err, filepath] = await this.getVideoFromGallery(options);

    if (!err) {
      try {
        const imageSource = await getVideoThumbnail(filepath);
        this.thumbnail = imageSource;
      } catch (err) {
        console.error(err);
      }
    }
  }

  private async getVideoFromCamera(options: VideoRecorderOptions): Promise<[err: Error, result: videorecorder.RecordResult]> {
    try {
      const authorizeCamera = await this.authorize('camera');
      const authorizeMicrophone = await this.authorize('microphone');

      if (!authorizeCamera) {
        throw new CameraPermissionRestrictedException();
      }

      if (!authorizeMicrophone) {
        throw new MicrophonePermissionRestrictedException();
      }

      const _videorecorder = new videorecorder.VideoRecorder(options);

      return [null, await _videorecorder.record()];
    } catch (err) {
      console.error('Error getting video from the camera: ', err);

      if (err instanceof CameraPermissionRestrictedException) {
        await Dialogs.alert({
          title: 'Error getting video from the camera',
          message: 'You have not granted access to the camera',
        });
      }

      if (err instanceof MicrophonePermissionRestrictedException) {
        await Dialogs.alert({
          title: 'Error getting video from the camera',
          message: 'You have not granted access to the microphone',
        });
      }

      return [err, null];
    }
  }

  private async getVideoFromGallery(options?: imagepicker.Options): Promise<[err: Error, filepath: string]> {
    try {
      let permission = 'photo';
      permission = isAndroid ? 'video' : permission;

      const authorize = await this.authorize(permission);

      if (!authorize) {
        throw new MediaFilePermissionRestrictedException();
      }

      const _imagepicker: imagepicker.ImagePicker = imagepicker.create(options);
      const selectedItems = await _imagepicker.present();

      if (!selectedItems) throw new Error('Missing selected items');

      return [null, selectedItems[0].path];
    } catch (err) {
      console.error('Error getting video from the gallery: ', err);
      return [err, ''];
    }
  }

  private async authorize(permission: string): Promise<any> {
    const permsResult: perms.Result = await perms.check(permission);

    if (permsResult[0] === 'authorized') {
      return true;
    }

    if (permsResult[0] === 'undetermined' || (isAndroid && permsResult[0] === 'restricted')) {
      const requestPermissionResult = await perms.request(permission);
      console.log(requestPermissionResult);
      if (requestPermissionResult[0] === 'authorized' || requestPermissionResult[0] === 'undetermined') {
        return true;
      }
    }

    return false;
  }
}
