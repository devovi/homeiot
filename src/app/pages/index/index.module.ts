import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { routing } from './index.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { EmbedVideo } from 'ngx-embed-video';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        EmbedVideo.forRoot(),
        NgxEchartsModule,
        routing
    ],
    declarations: [
        IndexComponent
    ]
})
export class IndexModule { }
