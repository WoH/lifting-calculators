import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdToolbarModule, MdInputModule, MdCardModule, MdRadioModule, MdCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { MaxCalculatorComponent } from './max-calculator/max-calculator.component';
import { WarmupCalculatorComponent } from './warmup-calculator/warmup-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    MaxCalculatorComponent,
    WarmupCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdInputModule,
    MdToolbarModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdRadioModule,
    MdInputModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
