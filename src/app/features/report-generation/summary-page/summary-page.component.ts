import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { ISummaryPage } from '../report.model';
import { VisitorSummaryComponent } from './visitor-summary/visitor-summary.component';
import { MaterialSummaryComponent } from './material-summary/material-summary.component';
import { DeliverySummaryComponent } from './delivery-summary/delivery-summary.component';
import { AttendanceSummaryComponent } from './attendance-summary/attendance-summary.component';
import { WorkProgressSummaryComponent } from './work-progress-summary/work-progress-summary.component';

@Component({
  selector: 'app-summary-page',
  standalone: true,
  imports: [
    CommonModule, 
    AttendanceSummaryComponent, 
    VisitorSummaryComponent, 
    MaterialSummaryComponent, 
    DeliverySummaryComponent,
    WorkProgressSummaryComponent
  ],
  templateUrl: './summary-page.component.html',
  styleUrl: './summary-page.component.scss'
})
export class SummaryPageComponent {

  summaryPage = input.required<ISummaryPage>();

}
