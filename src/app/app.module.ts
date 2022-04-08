import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';

import { PagesModule } from './feature/pages/pages.module';
import { LoadsModule } from './feature/loads/loads.module';
import { TrucksModule } from './feature/trucks/trucks.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    LoadsModule,
    TrucksModule,
    PagesModule,
    AuthModule
  ],
  providers: [
   //{
   //    provide: APP_INITIALIZER,
   //   useFactory: () => {
//
   //   },
   //   multi: true
   // }
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
