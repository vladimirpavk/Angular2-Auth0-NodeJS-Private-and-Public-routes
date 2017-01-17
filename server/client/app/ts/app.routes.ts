import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { LoginComponent } from './logincomponent/login.component';
import { HomeComponent } from './homecomponent/home.component';
import { PageNotFoundComponent } from './pagenotfoundcomponent/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/PageNotFoundComponent'}  
];

export const appRoutingProviders: any[] = [  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);