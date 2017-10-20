import { NgModule } from '@angular/core';
import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { LoginLayoutModule } from './login-layout';
import { InputModule } from './input';
import { ButtonModule } from './button';

@NgModule({
    imports: [
      HeaderModule,
      FooterModule,
      LoginLayoutModule,
      InputModule,
      ButtonModule
    ],
    exports: [
      HeaderModule,
      FooterModule,
      LoginLayoutModule,
      InputModule,
      ButtonModule
    ]
})
export class SharedModule {
}
