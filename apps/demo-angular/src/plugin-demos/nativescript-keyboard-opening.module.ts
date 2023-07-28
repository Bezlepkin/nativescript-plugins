import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptKeyboardOpeningComponent } from './nativescript-keyboard-opening.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptKeyboardOpeningComponent }])],
  declarations: [NativescriptKeyboardOpeningComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptKeyboardOpeningModule {}
