import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptKeyboardOpening } from '@demo/shared';
import {} from 'nativescript-keyboard-opening';

@Component({
  selector: 'demo-nativescript-keyboard-opening',
  templateUrl: 'nativescript-keyboard-opening.component.html',
})
export class NativescriptKeyboardOpeningComponent {
  demoShared: DemoSharedNativescriptKeyboardOpening;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptKeyboardOpening();
  }
}
