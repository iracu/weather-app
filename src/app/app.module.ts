import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {WeatherService} from './weather.service';
import {FormsModule} from '@angular/forms';
import { SinglePageComponent } from './single-page/single-page.component';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {DateWunixConvertorPipe} from './date-unix-convertor.pipe';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'day/:id', component: SinglePageComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent,
    HomePageComponent,
    DateWunixConvertorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
