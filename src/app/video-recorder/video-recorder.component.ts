import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { VideoStreamerService } from '../video-streamer.service';
import { UserMediaService } from '../user-media.service';

@Component({
  selector: 'app-video-recorder',
  templateUrl: './video-recorder.component.html',
  styleUrls: ['./video-recorder.component.css']
})
export class VideoRecorderComponent implements OnInit {

  @ViewChild('recorder') recorder: ElementRef;

  constructor(private userMediaService: UserMediaService, private videoStreamerService: VideoStreamerService) { }

  ngOnInit() {
    const recorderElement: HTMLVideoElement = this.recorder.nativeElement;
    this.userMediaService.getUserMedia({video: true}).subscribe(
      stream => recorderElement.srcObject = stream,
      error => console.log('Error:', error)
    );
    this.videoStreamerService.setImageSource(recorderElement);
  }

}
