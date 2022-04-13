import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadListComponent } from './load-list/load-list.component';
import { LoadListItemComponent } from './load-list-item/load-list-item.component';
import { LoadsPageComponent } from './loads-page/loads-page.component';
import { LoadsRoutingModule } from './loads-routing.module';
import { NewLoadComponent } from './new-load/new-load.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoadDetailsPageComponent } from './load-details-page/load-details-page.component';


@NgModule({
  declarations: [
    LoadListComponent,
    LoadListItemComponent,
    LoadsPageComponent,
    NewLoadComponent,
    LoadDetailsPageComponent
  ],
  imports: [
    CommonModule,
    LoadsRoutingModule,
    FormsModule, 
    HttpClientModule,
  ],
  exports: [
    LoadListComponent
  ]
})
export class LoadsModule { }
