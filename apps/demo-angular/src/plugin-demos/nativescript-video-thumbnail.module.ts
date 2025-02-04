import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptVideoThumbnailComponent } from './nativescript-video-thumbnail.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptVideoThumbnailComponent }])],
  declarations: [NativescriptVideoThumbnailComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptVideoThumbnailModule {}
