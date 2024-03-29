import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import {DeviceReportModule} from './device-report/device-report.module';
import {LiveVideoModule} from './live-video/live-video.module';
@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        DeviceReportModule,
        LiveVideoModule,
        routing,
        
    ],
    declarations: [
        PagesComponent,
        LoginComponent,
        
        
        
    ]
})
export class PagesModule { }
