import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProgressSummaryComponent } from './work-progress-summary.component';

describe('WorkProgressSummaryComponent', () => {
  let component: WorkProgressSummaryComponent;
  let fixture: ComponentFixture<WorkProgressSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkProgressSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkProgressSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
