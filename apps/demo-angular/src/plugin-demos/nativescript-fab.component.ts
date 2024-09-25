import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptFab } from '@demo/shared';
import {} from '@bezlepkin/nativescript-fab';

@Component({
  selector: 'demo-nativescript-fab',
  templateUrl: 'nativescript-fab.component.html',
})
export class NativescriptFabComponent {
  demoShared: DemoSharedNativescriptFab;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptFab();
  }
}
