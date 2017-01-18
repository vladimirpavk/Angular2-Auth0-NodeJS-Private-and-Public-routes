/// <reference path="../../../../node_modules/@angular/common/index.d.ts" />
var __moduleName:any;

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ RouterModule ]
})
export class AppComponent { 

  private _pageTitle: string;

  constructor(){
      this._pageTitle="Angular2-Auth0 - Sample application";
  }

}