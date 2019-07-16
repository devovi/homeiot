import { Routes, RouterModule } from '@angular/router';
import{SensordeviceComponent} from './sensordevice.component';
import {BuildingComponent} from './component/building/building.component';
import { Component } from '@angular/core';
const childRoutes : Routes = 
    [
      {
         path :``,
         component: SensordeviceComponent,
         children:[
             { path: '', redirectTo:'building', pathMatch: 'full' },
             { path: 'building', component: BuildingComponent },
         ]
      }
    ];
    export const routing = RouterModule.forChild(childRoutes);
