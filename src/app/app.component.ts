import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chroma Video';
  @ViewChild('video') video: ElementRef;
  private stream: MediaStream = null;
  // Get video
  constructor() {
    navigator.mediaDevices.getUserMedia({video: true})
      .then((stream) => {
        const videoElement = this.video.nativeElement;
        videoElement.srcObject = stream;
        videoElement.onloadedmetadata = (e: any) => {
          videoElement.play();
        };
      })
      .catch((error) => {
          console.log('Error:', error);
      });
  }
}
