/// <reference path="../../../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HomeComponent } from './homecomponent/home.component';
import { LoginComponent } from './logincomponent/login.component';
import { PageNotFoundComponent } from './pagenotfoundcomponent/pagenotfound.component';

import { routing,
         appRoutingProviders } from './app.routes';
import { PathLocationStrategy, LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent,
                  HomeComponent,
                  LoginComponent,
                  PageNotFoundComponent
                ],
  bootstrap:    [ AppComponent ],
  providers: [ 
               { 
                    provide: LocationStrategy,
                    useClass: HashLocationStrategy 
               },
               appRoutingProviders
    ]
})
export class AppModule { }