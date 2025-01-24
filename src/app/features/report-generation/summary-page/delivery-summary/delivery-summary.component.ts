import { Component, input } from '@angular/core';

@Component({
  selector: 'app-delivery-summary',
  standalone: true,
  imports: [],
  templateUrl: './delivery-summary.component.html',
  styleUrl: './delivery-summary.component.scss',
})
export class DeliverySummaryComponent {
  title = input<string>();
  deliverySummary = input<any>();
}
