import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveDataComponent } from './live-data.component';
// import { LiveDataComponent } from './live-data.component';
import{routing} from './live-data.routing';
// import { LivedataService } from '../../shared/services/livedata.service';
import { HttpClient } from '@angular/common/http';
import { LivedataService } from '../../shared/services/livedata.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LiveDataComponent],
  providers: [ HttpClient,LivedataService]
})
export class LiveDataModule { }
