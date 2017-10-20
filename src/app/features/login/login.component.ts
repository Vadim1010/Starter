import {
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { configObj } from '../../app.config';
@Component({
  selector: 'tt-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent{
  public warningText: string = configObj.loginWarning;
}
