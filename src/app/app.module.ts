import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ChartsModule } from 'ng2-charts';
import {LiveVideoModule} from './pages/live-video/live-video.module';
import {LiveDataModule} from './pages/live-data/live-data.module';
import { HttpHandler } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    LiveVideoModule,
    LiveDataModule,
    routing,
    // ChartsModule
  ],
  declarations: [
    AppComponent,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
