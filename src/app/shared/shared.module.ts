import { NgModule } from '@angular/core';
import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { LoginLayoutModule } from './login-layout';

@NgModule({
    imports: [
        HeaderModule,
        FooterModule,
        LoginLayoutModule
    ],
    exports: [
        HeaderModule,
        FooterModule,
        LoginLayoutModule
    ]
})
export class SharedModule {
}
