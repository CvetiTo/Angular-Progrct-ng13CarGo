import { RouterModule, Routes } from "@angular/router";
import { NewTruckComponent } from "./new-truck/new-truck.component";
import { TrucksPageComponent } from "./trucks-page/trucks-page.component";

const routes: Routes = [
    {
        path: 'trucks',
        component: TrucksPageComponent
    },
    {
        path: 'trucks/new',
        component: NewTruckComponent
    },
];

export const TrucksRoutingModule = RouterModule.forChild(routes);