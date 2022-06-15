import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';

const compPrime = [
  ButtonModule
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ...compPrime],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
