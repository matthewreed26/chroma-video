import { Component, ViewChild, ElementRef } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-video-recorder',
  templateUrl: './video-recorder.component.html',
  styleUrls: ['./video-recorder.component.css']
})
export class VideoRecorderComponent {

  @ViewChild('recorder') recorder: ElementRef;
  @ViewChild('player') player: ElementRef;
  // Get video
  constructor() {
    navigator.mediaDevices.getUserMedia({video: true})
      .then((stream: MediaStream) => {
        const recorderElement: HTMLVideoElement = this.recorder.nativeElement;
        recorderElement.srcObject = stream;
        const playerElement: HTMLCanvasElement = this.player.nativeElement;
        const playerCtx: CanvasRenderingContext2D = playerElement.getContext('2d');
        interval(0)
          .subscribe(() => {
            playerCtx.drawImage(recorderElement, 0, 0, playerElement.width, playerElement.height);
          });
      })
      .catch((error) => {
          console.log('Error:', error);
      });
  }

}
