import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UsersService{

    private _usersUrl='http://localhost:3000/users';
    //private _usersUrl='server/client/app/js/users/users.json';

    constructor(private _authHttp: AuthHttp,
    private _http: Http){

    }

    private extractData(res: Response){
        let body=res.json();       
        return body.data || {};
    }

    public getUsers(): Observable<User[]>{        
        return this._authHttp.get(this._usersUrl).map(this.extractData);                          
    }

    public getUsers2(): Observable<User[]>{        
        return this._http.get(this._usersUrl).map(this.extractData);                          
    }

}