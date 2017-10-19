import { NgModule } from '@angular/core';
import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { LayoutModule } from './layout';

@NgModule({
  imports: [
    HeaderModule,
    FooterModule,
    LayoutModule
  ],
  exports: [
    HeaderModule,
    FooterModule,
    LayoutModule
  ]
})
export class SharedModule {
}
