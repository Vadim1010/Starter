import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateComponent } from './layout.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    TemplateComponent
  ],
  exports: [TemplateComponent],
})
export class TemplateModule {
}
