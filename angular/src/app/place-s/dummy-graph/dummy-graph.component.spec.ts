import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyGraphComponent } from './dummy-graph.component';

describe('DummyGraphComponent', () => {
  let component: DummyGraphComponent;
  let fixture: ComponentFixture<DummyGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DummyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
