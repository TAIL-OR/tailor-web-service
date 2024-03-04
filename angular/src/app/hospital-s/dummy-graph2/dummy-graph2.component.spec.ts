import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyGraph2Component } from './dummy-graph2.component';

describe('DummyGraph2Component', () => {
  let component: DummyGraph2Component;
  let fixture: ComponentFixture<DummyGraph2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyGraph2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DummyGraph2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
