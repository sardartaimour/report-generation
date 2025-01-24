import { Component, input } from '@angular/core';

@Component({
  selector: 'app-visitor-summary',
  standalone: true,
  imports: [],
  templateUrl: './visitor-summary.component.html',
  styleUrl: './visitor-summary.component.scss'
})
export class VisitorSummaryComponent {

  title = input<string>();
  visitorSummary = input<any>();

}
