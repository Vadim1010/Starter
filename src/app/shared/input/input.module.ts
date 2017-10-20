import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from './input.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    InputComponent
  ],
  exports: [InputComponent],
})
export class InputModule {
}
