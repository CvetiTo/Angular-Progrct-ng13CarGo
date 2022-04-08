import { RouterModule, Routes } from "@angular/router";
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
    }
];

export const LoadsRoutingModule = RouterModule.forChild(routes);