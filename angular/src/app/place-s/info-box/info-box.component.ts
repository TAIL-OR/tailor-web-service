import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-box2',
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss'
})
export class InfoBoxComponent2 {
  @Input() info: String;
  @Input() imageSrc: String;
  @Input() score: number;
  @Input() maxScore: number;
}
