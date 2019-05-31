import { Component, ViewChild, ElementRef, OnInit, NgZone, Input } from '@angular/core';
import { VideoStreamerService } from '../video-streamer.service';

@Component({
  selector: 'app-chroma-rotoscoping',
  templateUrl: './chroma-rotoscoping.component.html',
  styleUrls: ['./chroma-rotoscoping.component.css']
})
export class ChromaRotoscopingComponent implements OnInit {

  @ViewChild('canvas1') c1ViewChild: ElementRef;
  @ViewChild('canvas2') c2ViewChild: ElementRef;
  @ViewChild('canvas3') c3ViewChild: ElementRef;
  @Input() colorFilter: string;

  constructor(private videoStreamerService: VideoStreamerService, private ngZone: NgZone) { }

  ngOnInit() {
    const c1: HTMLCanvasElement = this.c1ViewChild.nativeElement;
    const c2: HTMLCanvasElement = this.c2ViewChild.nativeElement;
    const c3: HTMLCanvasElement = this.c3ViewChild.nativeElement;
    const ctx1: CanvasRenderingContext2D = c1.getContext('2d');
    const ctx2: CanvasRenderingContext2D = c2.getContext('2d');
    const ctx3: CanvasRenderingContext2D = c3.getContext('2d');
    this.ngZone.runOutsideAngular(() => this.draw(c1, ctx1, true));
    this.ngZone.runOutsideAngular(() => this.draw(c2, ctx2, false));
    this.ngZone.runOutsideAngular(() => this.draw(c3, ctx3, false));
  }

  draw(canvasElement: HTMLCanvasElement, canvasCtx: CanvasRenderingContext2D, primaryCanvas: boolean) {
    canvasCtx.drawImage(this.videoStreamerService.getImageSource(), 0, 0, canvasElement.width, canvasElement.height);

    const frame = canvasCtx.getImageData(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.putImageData(this.filterFrameByColor(frame, primaryCanvas), 0, 0);

    window.requestAnimationFrame(() => this.draw(canvasElement, canvasCtx, primaryCanvas));
  }

  filterFrameByColor(frame: ImageData, primaryCanvas: boolean): ImageData {
    const l = frame.data.length / 4;
    for (let i = 0; i < l; i++) {
      const r = frame.data[i * 4 + 0];
      const g = frame.data[i * 4 + 1];
      const b = frame.data[i * 4 + 2];


      switch (this.colorFilter) {
        case 'Red':
          if (r > g && r > b && r > 100) {
            frame.data[i * 4 + 3] = 0;
          } else {
            if (!primaryCanvas) {
              frame.data[i * 4 + 0] = 200;
              frame.data[i * 4 + 2] = 200;
            }
          }
          break;
        case 'Green':
          if (g > r && g > b && g > 100) {
            frame.data[i * 4 + 3] = 0;
          } else {
            if (!primaryCanvas) {
              frame.data[i * 4 + 0] = 200;
              frame.data[i * 4 + 2] = 200;
            }
          }
          break;
        case 'Blue':
          if (b > r && b > g && b > 100) {
            frame.data[i * 4 + 3] = 0;
          } else {
            if (!primaryCanvas) {
              frame.data[i * 4 + 0] = 200;
              frame.data[i * 4 + 2] = 200;
            }
          }
          break;
      }
    }
    return frame;
  }

}
