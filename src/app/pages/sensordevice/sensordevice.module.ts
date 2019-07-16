import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './sensordevice.routing';

import { SensordeviceComponent } from './sensordevice.component';
import { BuildingComponent } from './component/building/building.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [SensordeviceComponent, BuildingComponent]
})
export class SensordeviceModule { }
