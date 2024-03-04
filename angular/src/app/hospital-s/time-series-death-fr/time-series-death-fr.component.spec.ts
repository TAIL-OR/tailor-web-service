import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSeriesDeathFrComponent } from './time-series-death-fr.component';

describe('TimeSeriesDeathFrComponent', () => {
  let component: TimeSeriesDeathFrComponent;
  let fixture: ComponentFixture<TimeSeriesDeathFrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeSeriesDeathFrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeSeriesDeathFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
