import { Component, input } from '@angular/core';

@Component({
  selector: 'app-material-summary',
  standalone: true,
  imports: [],
  templateUrl: './material-summary.component.html',
  styleUrl: './material-summary.component.scss',
})
export class MaterialSummaryComponent {
  title = input<string>();
  materialSummary = input<any>();
}
