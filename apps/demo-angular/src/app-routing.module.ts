import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nativescript-fab', loadChildren: () => import('./plugin-demos/nativescript-fab.module').then((m) => m.NativescriptFabModule) },
  { path: 'nativescript-keyboard-opening', loadChildren: () => import('./plugin-demos/nativescript-keyboard-opening.module').then((m) => m.NativescriptKeyboardOpeningModule) },
  { path: 'nativescript-photo-editor', loadChildren: () => import('./plugin-demos/nativescript-photo-editor.module').then((m) => m.NativescriptPhotoEditorModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
