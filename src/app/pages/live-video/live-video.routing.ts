import { Routes, RouterModule } from '@angular/router';
import {LiveVideoComponent} from './live-video.component';
import { Component } from '@angular/core';
const childRoutes : Routes = 
    [
        {
            path: ``,
            component: LiveVideoComponent,
            
        }
    ];
    export const routing = RouterModule.forChild(childRoutes);
