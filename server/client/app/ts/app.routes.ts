import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { LoginComponent } from './logincomponent/login.component';
import { HomeComponent } from './homecomponent/home.component';
import { PageNotFoundComponent } from './pagenotfoundcomponent/pagenotfound.component';
import { AuthenticationCallbackActivateGuard } from './AuthenticationCallbackActivateGuard';
const appRoutes: Routes = [  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },  
  { path: 'home', component: HomeComponent },
  { path: 'pagenotfound', component: PageNotFoundComponent, canActivate: [AuthenticationCallbackActivateGuard] },  
  { path: '**', redirectTo: '/pagenotfound' }  
];

export const appRoutingProviders: any[] = [  
  AuthenticationCallbackActivateGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);