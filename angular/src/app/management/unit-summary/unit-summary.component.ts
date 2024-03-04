import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unit-summary',

  templateUrl: './unit-summary.component.html',
  styleUrl: './unit-summary.component.scss'
})
export class UnitSummaryComponent {
  @Input() info: String;
  @Input() imageSrc: String;
  @Input() label: number;
}
