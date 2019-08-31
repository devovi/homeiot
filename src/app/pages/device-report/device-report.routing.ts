import {Routes , RouterModule} from '@angular/router';
import { DeviceReportComponent } from './device-report.component';
// import {IndexComponent} from '../index/index.component';
const childRoutes :Routes = [
    {
        path:``,
        component: DeviceReportComponent
    },
    
];
export const routing = RouterModule.forChild(childRoutes);

