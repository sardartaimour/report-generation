import { Component, input } from '@angular/core';
import { ICoverPage } from '../report.model';

@Component({
  selector: 'app-cover-page',
  standalone: true,
  imports: [],
  templateUrl: './cover-page.component.html',
  styleUrl: './cover-page.component.scss',
})
export class CoverPageComponent {
  coverPage = input.required<ICoverPage>();
}
