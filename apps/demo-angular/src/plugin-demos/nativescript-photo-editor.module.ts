import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptPhotoEditorComponent } from './nativescript-photo-editor.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptPhotoEditorComponent }])],
  declarations: [NativescriptPhotoEditorComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptPhotoEditorModule {}
