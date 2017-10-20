import {
  Component,
  ViewEncapsulation,
  Input
} from '@angular/core';

@Component({
  selector: 'tt-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() type: string;
  @Input() className: string;
}
