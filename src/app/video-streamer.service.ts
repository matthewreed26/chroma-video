import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoStreamerService {

  private videoCanvasSource: CanvasImageSource;

  constructor() { }

  setImageSource(videoCanvasSource: CanvasImageSource): void {
    this.videoCanvasSource = videoCanvasSource;
  }

  getImageSource(): CanvasImageSource {
    return this.videoCanvasSource;
  }
}
