import { Component, input } from '@angular/core';
import { ISummaryPage } from '../report.model';
import { AttendanceSummaryComponent } from './attendance-summary/attendance-summary.component';
import { VisitorSummaryComponent } from './visitor-summary/visitor-summary.component';
import { MaterialSummaryComponent } from './material-summary/material-summary.component';
import { DeliverySummaryComponent } from './delivery-summary/delivery-summary.component';

@Component({
  selector: 'app-summary-page',
  standalone: true,
  imports: [AttendanceSummaryComponent, VisitorSummaryComponent, MaterialSummaryComponent, DeliverySummaryComponent],
  templateUrl: './summary-page.component.html',
  styleUrl: './summary-page.component.scss'
})
export class SummaryPageComponent {

  summaryPage = input.required<ISummaryPage>();

}
