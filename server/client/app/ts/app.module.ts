/// <reference path="../../../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';

import { AppComponent }   from './app.component';
import { HomeComponent } from './homecomponent/home.component';
import { LoginComponent } from './logincomponent/login.component';
import { PageNotFoundComponent } from './pagenotfoundcomponent/pagenotfound.component';

import { routing,
         appRoutingProviders } from './app.routes';
import { PathLocationStrategy, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AUTH_PROVIDERS, AuthHttp, AuthConfig }      from 'angular2-jwt';

export function authConfigProvider(){
  return new AuthConfig();
}

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule ],
  declarations: [ AppComponent,
                  HomeComponent,
                  LoginComponent,
                  PageNotFoundComponent
                ],
  bootstrap:    [ AppComponent ],
  providers: [ AUTH_PROVIDERS,
               { 
                    provide: LocationStrategy,
                    /*useClass: HashLocationStrategy*/
                    useClass: PathLocationStrategy 
               },
               appRoutingProviders,             
               {
                 provide: AuthConfig,
                 useFactory: authConfigProvider                   
               }
    ]
})
export class AppModule { }