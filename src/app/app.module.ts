import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { SubstrPipe } from './pipes/substr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    SubstrPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
