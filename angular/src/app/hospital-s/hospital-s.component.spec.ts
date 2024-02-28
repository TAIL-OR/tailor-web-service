import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalSComponent } from './hospital-s.component';

describe('HospitalSComponent', () => {
  let component: HospitalSComponent;
  let fixture: ComponentFixture<HospitalSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HospitalSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
