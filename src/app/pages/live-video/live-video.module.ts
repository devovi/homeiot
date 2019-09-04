import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveVideoComponent } from './live-video.component';
import {routing}  from './live-video.routing';
import { NgxEchartsModule } from 'ngx-echarts';
// import { EmbedVideo } from 'ngx-embed-video';

@NgModule({
  imports: [
    CommonModule,
    // EmbedVideo.forRoot(),
    NgxEchartsModule,
   
    routing
  ],
  exports:[
    LiveVideoComponent
  ],
  declarations: [LiveVideoComponent]
})
export class LiveVideoModule { }
