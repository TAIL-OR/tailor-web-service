import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSeriesBarGraphComponent } from './time-series-bar-graph.component';

describe('TimeSeriesBarGraphComponent', () => {
  let component: TimeSeriesBarGraphComponent;
  let fixture: ComponentFixture<TimeSeriesBarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeSeriesBarGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeSeriesBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
