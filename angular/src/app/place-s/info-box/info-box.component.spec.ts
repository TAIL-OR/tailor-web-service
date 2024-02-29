import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBoxComponent2 } from './info-box.component';

describe('InfoBoxComponent2', () => {
  let component: InfoBoxComponent2;
  let fixture: ComponentFixture<InfoBoxComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBoxComponent2]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoBoxComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
