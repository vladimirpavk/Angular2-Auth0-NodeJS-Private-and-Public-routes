import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './logincomponent/login.component';
import { HomeComponent } from './homecomponent/home.component';
import { PageNotFoundComponent } from './pagenotfoundcomponent/pagenotfound.component';
import { AuthenticationCallbackActivateGuard } from './AuthenticationCallbackActivateGuard';

/*
When we use HashLocationStrategy

const appRoutes: Routes = [  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },  
  { path: 'home', component: HomeComponent },
  { path: 'pagenotfound', component: PageNotFoundComponent, canActivate: [AuthenticationCallbackActivateGuard] },  
  { path: '**', redirectTo: '/pagenotfound' }  
];
*/

//When we use PathLocationStrategy
const appRoutes: Routes = [  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },  
  { path: 'home', component: HomeComponent },
  { path: 'pnf', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pnf', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [  
  AuthenticationCallbackActivateGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);