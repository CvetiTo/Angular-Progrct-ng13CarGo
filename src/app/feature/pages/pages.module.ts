import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadsModule } from '../loads/loads.module';
import { TrucksModule } from '../trucks/trucks.module';




@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    LoadsModule,
    TrucksModule,
    RouterModule,  
  ]
})
export class PagesModule { }
