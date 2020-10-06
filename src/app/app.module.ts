import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GokuComponent } from './components/goku/goku.component';
import { GohanComponent } from './components/gohan/gohan.component';

@NgModule({
  declarations: [
    AppComponent,
    GokuComponent,
    GohanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
