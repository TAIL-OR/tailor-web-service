import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSeriesDeathComponent } from './time-series-death.component';

describe('TimeSeriesDeathComponent', () => {
  let component: TimeSeriesDeathComponent;
  let fixture: ComponentFixture<TimeSeriesDeathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeSeriesDeathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeSeriesDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
