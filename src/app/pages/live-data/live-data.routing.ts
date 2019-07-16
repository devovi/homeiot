import { Routes, RouterModule } from '@angular/router';
import {LiveDataComponent} from './live-data.component';
import { Component } from '@angular/core';
const childRoutes : Routes = 
    [
        {
            path: ``,
            component: LiveDataComponent,
            
        }
    ];
    export const routing = RouterModule.forChild(childRoutes);
