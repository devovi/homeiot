import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveDataComponent } from './live-data.component';
// import { LiveDataComponent } from './live-data.component';
import{routing} from './live-data.routing';
// import { LivedataService } from '../../shared/services/livedata.service';
import { HttpClient } from '@angular/common/http';
import { LivedataService } from '../../shared/services/livedata.service';
import 'chartjs-plugin-zoom';
import { EmbedVideo } from 'ngx-embed-video';
import * as moment from 'moment';

@NgModule({
  imports: [
    CommonModule,
    EmbedVideo.forRoot(),
    routing
  ],
  declarations: [LiveDataComponent],
  providers: [ HttpClient,LivedataService]
})
export class LiveDataModule { }
