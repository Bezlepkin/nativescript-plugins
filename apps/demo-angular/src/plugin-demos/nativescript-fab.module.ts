import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptFabComponent } from './nativescript-fab.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptFabComponent }])],
  declarations: [NativescriptFabComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptFabModule {}
