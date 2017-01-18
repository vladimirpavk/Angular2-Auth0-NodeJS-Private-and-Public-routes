/// <reference path="../../../../../node_modules/@angular/common/index.d.ts" />
var __moduleName: any;

import { Component, OnInit } from '@angular/core';
@Component({
    moduleId: __moduleName,
    selector: 'pagenotfound',
    templateUrl: 'pagenotfound.component.html'
})
export class PageNotFoundComponent implements OnInit{

    private _pageNotFoundMessage: string;

    constructor(){

    }

    ngOnInit(){
        this._pageNotFoundMessage="404 - Page Not found";
    }

}