import { Component, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { VideoStreamerService } from '../video-streamer.service';

@Component({
  selector: 'app-video-recorder',
  templateUrl: './video-recorder.component.html',
  styleUrls: ['./video-recorder.component.css']
})
export class VideoRecorderComponent implements AfterContentInit {

  @ViewChild('recorder') recorder: ElementRef;

  constructor(private videoStreamerService: VideoStreamerService) { }

  ngAfterContentInit() {
    navigator.mediaDevices.getUserMedia({video: true})
      .then((stream: MediaStream) => {
        const recorderElement: HTMLVideoElement = this.recorder.nativeElement;
        recorderElement.srcObject = stream;
        this.videoStreamerService.setImageSource(recorderElement);
      })
      .catch((error) => {
          console.log('Error:', error);
      });
  }

}
