/// <reference path="../../../../../node_modules/@angular/common/index.d.ts" />
var __moduleName: any;

import { Component, OnInit } from '@angular/core';
@Component({
    moduleId: __moduleName,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit{

    private _homeMessage: string;
    private _loginMessage: string;
    private _notloginMessage: string;

    constructor(){

    }

    ngOnInit(){
        this._homeMessage="Welcome to the application...";
        this._loginMessage="...you are authorized";
        this._notloginMessage="...you are NOT authorized. Please login or die.";
    }

}