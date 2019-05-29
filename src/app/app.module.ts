import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoRecorderComponent } from './video-recorder/video-recorder.component';
import { InvisibilityCloakComponent } from './invisibility-cloak/invisibility-cloak.component';
import { ChromaRotoscopingComponent } from './chroma-rotoscoping/chroma-rotoscoping.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoRecorderComponent,
    InvisibilityCloakComponent,
    ChromaRotoscopingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
