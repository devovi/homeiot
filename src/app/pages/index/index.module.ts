import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { routing } from './index.routing';
import { SharedModule } from '../../shared/shared.module';
import { LiveDataModule } from '../live-data/live-data.module';
import {LiveVideoModule } from '../live-video/live-video.module';
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        LiveDataModule,
        LiveVideoModule,
        routing
    ],
    declarations: [
        IndexComponent
    ]
})
export class IndexModule { }
