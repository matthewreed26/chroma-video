import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCanvasComponent } from './video-canvas.component';

describe('VideoCanvasComponent', () => {
  let component: VideoCanvasComponent;
  let fixture: ComponentFixture<VideoCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
