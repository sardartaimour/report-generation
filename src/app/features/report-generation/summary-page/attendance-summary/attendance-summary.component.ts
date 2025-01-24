import { Component, input } from '@angular/core';

@Component({
  selector: 'app-attendance-summary',
  standalone: true,
  imports: [],
  templateUrl: './attendance-summary.component.html',
  styleUrl: './attendance-summary.component.scss',
})
export class AttendanceSummaryComponent {
  attendanceSummary = input<any>();

  showManHours(): boolean {
	return this.attendanceSummary()?.attendance_summary?.length && this.attendanceSummary()?.attendance_summary[0]?.man_hours;
  }
}
