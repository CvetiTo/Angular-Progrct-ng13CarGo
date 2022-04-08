import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadListComponent } from './load-list/load-list.component';
import { LoadListItemComponent } from './load-list-item/load-list-item.component';
import { LoadsPageComponent } from './loads-page/loads-page.component';
import { LoadsRoutingModule } from './loads-routing.module';
import { NewLoadComponent } from './new-load/new-load.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    LoadListComponent,
    LoadListItemComponent,
    LoadsPageComponent,
    NewLoadComponent
  ],
  imports: [
    CommonModule,
    LoadsRoutingModule,
    FormsModule, 
    HttpClientModule,
    MatTableModule
  ]
})
export class LoadsModule { }
