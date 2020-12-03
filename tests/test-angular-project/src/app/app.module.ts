import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PetAPIClientModule } from '../api-all-tags/services/pet';
import { UserAPIClientModule } from '../api-all-tags/services/user';
import { APIClientModule } from '../api-no-tags';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    APIClientModule.forRoot({ guardResponses: true }),
    PetAPIClientModule.forRoot({
      guardResponses: false,
      domain: 'pet.domain',
    }),
    UserAPIClientModule.forRoot({
      guardResponses: false,
      domain: 'user.domain',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
