import { Component, ViewChild, ElementRef, OnInit, NgZone, Input } from '@angular/core';
import { VideoStreamerService } from '../../video-streamer.service';

@Component({
  selector: 'app-simple-filter-canvas',
  templateUrl: './simple-filter-canvas.component.html',
  styleUrls: ['./simple-filter-canvas.component.css']
})
export class SimpleFilterComponent implements OnInit {

  @ViewChild('canvas1') c1ViewChild: ElementRef;
  @Input() colorFilter: string;
  @Input() magnitudeFilter: number;

  constructor(private videoStreamerService: VideoStreamerService, private ngZone: NgZone) { }

  ngOnInit() {
    const c1: HTMLCanvasElement = this.c1ViewChild.nativeElement;
    const ctx1: CanvasRenderingContext2D = c1.getContext('2d');
    this.ngZone.runOutsideAngular(() => this.draw(c1, ctx1));
  }

  draw(canvasElement: HTMLCanvasElement, canvasCtx: CanvasRenderingContext2D) {
    canvasCtx.drawImage(this.videoStreamerService.getImageSource(), 0, 0, canvasElement.width, canvasElement.height);

    const frame = canvasCtx.getImageData(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.putImageData(this.filterFrameByColor(frame), 0, 0);

    window.requestAnimationFrame(() => this.draw(canvasElement, canvasCtx));
  }

  filterFrameByColor(frame: ImageData): ImageData {
    const l = frame.data.length / 4;
    for (let i = 0; i < l; i++) {
      const r = frame.data[i * 4 + 0];
      const g = frame.data[i * 4 + 1];
      const b = frame.data[i * 4 + 2];

      switch (this.colorFilter) {
        case 'Red':
          if (r > g && r > b && r > this.magnitudeFilter) {
            frame.data[i * 4 + 3] = 0;
          }
          break;
        case 'Green':
          if (g > r && g > b && g > this.magnitudeFilter) {
            frame.data[i * 4 + 3] = 0;
          }
          break;
        case 'Blue':
          if (b > r && b > g && b > this.magnitudeFilter) {
            frame.data[i * 4 + 3] = 0;
          }
          break;
      }
    }
    return frame;
  }

}
