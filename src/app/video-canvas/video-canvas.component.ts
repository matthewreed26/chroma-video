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
    window.requestAnimationFrame(() => this.draw(playerElement, playerCtx));
  }

}
