import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoRecorderComponent } from './video-recorder/video-recorder.component';
import { VideoCanvasComponent } from './video-canvas/video-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoRecorderComponent,
    VideoCanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
