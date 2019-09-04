import {Routes , RouterModule} from '@angular/router';
import { DeviceReportComponent } from './device-report.component';
const childRoutes :Routes = [
    {
        path:``,
        component: DeviceReportComponent
    },
    
];
export const routing = RouterModule.forChild(childRoutes);

