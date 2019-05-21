import { Component, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
import { VideoStreamerService } from '../video-streamer.service';

@Component({
  selector: 'app-video-canvas',
  templateUrl: './video-canvas.component.html',
  styleUrls: ['./video-canvas.component.css']
})
export class VideoCanvasComponent implements OnInit {

  @ViewChild('player') player: ElementRef;

  constructor(private videoStreamerService: VideoStreamerService, private ngZone: NgZone) { }

  ngOnInit() {
    const playerElement: HTMLCanvasElement = this.player.nativeElement;
    const playerCtx: CanvasRenderingContext2D = playerElement.getContext('2d');
    this.ngZone.runOutsideAngular(() => this.draw(playerElement, playerCtx));
  }

  draw(playerElement: HTMLCanvasElement, playerCtx: CanvasRenderingContext2D) {
    playerCtx.drawImage(this.videoStreamerService.getImageSource(), 0, 0, playerElement.width, playerElement.height);

    const frame = playerCtx.getImageData(0, 0, playerElement.width, playerElement.height);
    playerCtx.putImageData(this.findAndRemoveBlue(frame), 0, 0);

    window.requestAnimationFrame(() => this.draw(playerElement, playerCtx));
  }

  findAndRemoveBlue(frame: ImageData): ImageData {
    const l = frame.data.length / 4;
    for (let i = 0; i < l; i++) {
      const r = frame.data[i * 4 + 0];
      const g = frame.data[i * 4 + 1];
      const b = frame.data[i * 4 + 2];

      if (b > r && b > g) {
        if (b > 100 ) {
          frame.data[i * 4 + 3] = 0;
        }
      }
    }
    return frame;
  }

}
