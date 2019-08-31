import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceReportComponent } from './device-report.component';
import {routing} from './device-report.routing';
// import {IndexModule} from '../index/index.module';
@NgModule({
  imports: [
    CommonModule,
    routing,
    // IndexModule
  ],
  declarations: [
    DeviceReportComponent
  ]
})
export class DeviceReportModule { }
