import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptVideoThumbnail } from '@demo/shared';
import {} from '@bezlepkin/nativescript-video-thumbnail';

@Component({
  selector: 'demo-nativescript-video-thumbnail',
  templateUrl: 'nativescript-video-thumbnail.component.html',
})
export class NativescriptVideoThumbnailComponent {
  demoShared: DemoSharedNativescriptVideoThumbnail;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptVideoThumbnail();
  }
}
