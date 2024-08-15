import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptPhotoEditor } from '@demo/shared';
import {} from 'nativescript-photo-editor';

@Component({
  selector: 'demo-nativescript-photo-editor',
  templateUrl: 'nativescript-photo-editor.component.html',
})
export class NativescriptPhotoEditorComponent {
  demoShared: DemoSharedNativescriptPhotoEditor;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptPhotoEditor();
  }
}
