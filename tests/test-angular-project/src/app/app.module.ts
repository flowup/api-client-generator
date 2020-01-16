import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APIClientModule } from '../api-no-tags';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, APIClientModule.forRoot({ guardResponses: true })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
