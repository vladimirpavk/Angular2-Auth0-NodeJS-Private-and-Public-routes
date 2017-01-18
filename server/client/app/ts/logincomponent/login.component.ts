/// <reference path="../../../../../node_modules/@angular/common/index.d.ts" />
var __moduleName: any;

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authservice/auth.service';
@Component({
    moduleId: __moduleName,
    selector: 'login',
    templateUrl: 'login.component.html',
    providers: [ AuthService ]
})
export class LoginComponent implements OnInit{

    private _loginMessage: string;    
    
    constructor(private _authService: AuthService){             
    }

    ngOnInit(){
        this._loginMessage="Please press button to login or logout";
    }

    public login(): void{
        console.log("Login button clicked...");        
        this._authService.login();
    }    

    public logout(): void{
        console.log("Logout button clicked...");
    }

}