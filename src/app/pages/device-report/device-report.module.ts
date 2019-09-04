import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceReportComponent } from './device-report.component';
// import {LiveDataModule} from '../live-data/live-data.module';
import {routing} from './device-report.routing';
// import {IndexModule} from '../index/index.module';
import {IndexComponent} from '../index/index.component';
// import {LiveVideoModule} from '../live-video/live-video.module'
@NgModule({
  imports: [
    CommonModule,
    // LiveVideoModule,
    // LiveDataModule,
    //  IndexModule,
    routing,
    
  ],
//   exports: [
//     IndexComponent
// ],

  declarations: [
    DeviceReportComponent,
    // IndexComponent
  ]
})
export class DeviceReportModule { }
