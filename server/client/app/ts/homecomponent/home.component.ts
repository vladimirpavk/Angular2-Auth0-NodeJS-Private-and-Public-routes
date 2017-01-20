/// <reference path="../../../../../node_modules/@angular/common/index.d.ts" />
var __moduleName: any;

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authservice/auth.service';
@Component({
    moduleId: __moduleName,
    selector: 'home',
    templateUrl: 'home.component.html',
    providers: [ AuthService ]    
})
export class HomeComponent implements OnInit{

    public _homeMessage: string;
    private _loginMessage: string;
    private _notloginMessage: string;

    constructor(private _authService: AuthService){

    }

    ngOnInit(){
        this._homeMessage="Welcome to the application...";
        this._loginMessage="...you are authorized";
        this._notloginMessage="...you are NOT authorized. Please login or die.";
    }

}