import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckListComponent } from './truck-list/truck-list.component';
import { TruckListItemComponent } from './truck-list-item/truck-list-item.component';
import { NewTruckComponent } from './new-truck/new-truck.component';
import { TrucksPageComponent } from './trucks-page/trucks-page.component';
import { FormsModule } from '@angular/forms';
import { TrucksRoutingModule } from './trucks-routing.module';



@NgModule({
  declarations: [
    TruckListComponent,
    TruckListItemComponent,
    NewTruckComponent,
    TrucksPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TrucksRoutingModule
  ],
  exports: [
    TruckListComponent
  ]
})
export class TrucksModule { }
