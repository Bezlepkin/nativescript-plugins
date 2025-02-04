import { Component } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  demos = [
    {
      name: 'nativescript-fab',
    },
    {
      name: 'nativescript-keyboard-opening',
    },
    {
      name: 'nativescript-photo-editor',
    },
    {
      name: 'nativescript-video-thumbnail',
    },
  ];
}
