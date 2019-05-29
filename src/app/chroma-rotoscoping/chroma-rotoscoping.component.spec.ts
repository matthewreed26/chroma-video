import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromaRotoscopingComponent } from './chroma-rotoscoping.component';

describe('VideoCanvasComponent', () => {
  let component: ChromaRotoscopingComponent;
  let fixture: ComponentFixture<ChromaRotoscopingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChromaRotoscopingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromaRotoscopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
