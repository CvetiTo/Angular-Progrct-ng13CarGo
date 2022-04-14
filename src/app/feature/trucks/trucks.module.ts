import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckListComponent } from './truck-list/truck-list.component';
import { TruckListItemComponent } from './truck-list-item/truck-list-item.component';
import { NewTruckComponent } from './new-truck/new-truck.component';
import { TrucksPageComponent } from './trucks-page/trucks-page.component';
import { FormsModule } from '@angular/forms';
import { TrucksRoutingModule } from './trucks-routing.module';
import { TruckDetailsPageComponent } from './truck-details-page/truck-details-page.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    TruckListComponent,
    TruckListItemComponent,
    NewTruckComponent,
    TrucksPageComponent,
    TruckDetailsPageComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    TrucksRoutingModule,
    HttpClientModule
  ],
  exports: [
    TruckListComponent
  ]
})
export class TrucksModule { }
