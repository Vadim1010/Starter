import {
  Component,
  ViewEncapsulation,
  Input
} from '@angular/core';

@Component({
  selector: 'tt-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {
  @Input() type: string = 'email';
  @Input() required: string = 'required';
  @Input() className: string = '';
  @Input() placeholder: string = 'email';
}
