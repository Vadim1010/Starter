import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent  } from './login.component';
import  { SharedModule } from '../../shared';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [LoginComponent],
})
export class LoginModule {
}
