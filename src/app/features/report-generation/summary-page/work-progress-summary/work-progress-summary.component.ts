import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-work-progress-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-progress-summary.component.html',
  styleUrl: './work-progress-summary.component.scss'
})
export class WorkProgressSummaryComponent {
  workProgressSummary = input.required<any>();
}
