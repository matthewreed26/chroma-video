import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFilterComponent } from './simple-filter-canvas.component';

describe('VideoCanvasComponent', () => {
  let component: SimpleFilterComponent;
  let fixture: ComponentFixture<SimpleFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
