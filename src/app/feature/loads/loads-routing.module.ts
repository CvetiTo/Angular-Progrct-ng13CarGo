import { RouterModule, Routes } from "@angular/router";
import { LoadDetailsPageComponent } from "./load-details-page/load-details-page.component";
import { LoadsPageComponent } from "./loads-page/loads-page.component";
import { NewLoadComponent } from "./new-load/new-load.component";

const routes: Routes = [
    {
        path: 'loads',
        component: LoadsPageComponent
    },
    {
        path: 'loads/new',
        component: NewLoadComponent
    },
    {
        path: 'loads/:loadId',
        component: LoadDetailsPageComponent
    },

];

export const LoadsRoutingModule = RouterModule.forChild(routes);