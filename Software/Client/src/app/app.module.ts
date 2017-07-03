import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from '@angular/material'

import { AppComponent } from './app.component';
import { CircularComponent } from './circular/circular.component';
import { SearchComponent } from './search/search.component';
import {RouterModule} from '@angular/router'

import { HttpModule } from '@angular/http';
import {appRoutes} from './app.routes'


@NgModule({
  declarations: [
    AppComponent,
    CircularComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
