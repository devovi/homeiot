import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveDataComponent } from './live-data.component';
// import { LiveDataComponent } from './live-data.component';
import{routing} from './live-data.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LiveDataComponent]
})
export class LiveDataModule { }
