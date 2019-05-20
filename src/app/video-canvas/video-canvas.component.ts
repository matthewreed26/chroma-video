import { Component, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { interval } from 'rxjs';
import { VideoStreamerService } from '../video-streamer.service';

@Component({
  selector: 'app-video-canvas',
  templateUrl: './video-canvas.component.html',
  styleUrls: ['./video-canvas.component.css']
})
export class VideoCanvasComponent implements AfterContentInit {

  @ViewChild('player') player: ElementRef;

  constructor(private videoStreamerService: VideoStreamerService) { }

  ngAfterContentInit() {
    const playerElement: HTMLCanvasElement = this.player.nativeElement;
    const playerCtx: CanvasRenderingContext2D = playerElement.getContext('2d');
    interval(0)
      .subscribe(() => {
        playerCtx.drawImage(this.videoStreamerService.getImageSource(), 0, 0, playerElement.width, playerElement.height);
      });
  }

}
