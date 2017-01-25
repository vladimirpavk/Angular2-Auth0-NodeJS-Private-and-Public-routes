/// <reference path="../../../../../node_modules/@angular/common/index.d.ts" />
var __moduleName: any;

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authservice/auth.service';
import { Observable } from 'rxjs/Observable';
import { UsersService } from '../users/users.service';
import { User } from '../users/user';

@Component({
    moduleId: __moduleName,
    selector: 'home',
    templateUrl: 'home.component.html',
    providers: [ AuthService, UsersService ]    
})
export class HomeComponent implements OnInit{

    public _homeMessage: string;
    private _loginMessage: string;
    private _notloginMessage: string; 

    private _users: User[];

    constructor(private _authService: AuthService,
                private _usersService: UsersService){

    }

    ngOnInit(){
        this._homeMessage="Welcome to the application...";
        this._loginMessage="...you are authorized";
        this._notloginMessage="...you are NOT authorized. Please login or die.";
        
        this._usersService.getUsers().subscribe(
                users => this._users = users,
                err => console.log(err),
                () => {
                    console.log('Request Complete');
                    console.log(this._users);
                }
            );                
    }

}