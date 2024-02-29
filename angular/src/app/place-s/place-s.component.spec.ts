import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceSComponent } from './place-s.component';

describe('PlaceSComponent', () => {
  let component: PlaceSComponent;
  let fixture: ComponentFixture<PlaceSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
