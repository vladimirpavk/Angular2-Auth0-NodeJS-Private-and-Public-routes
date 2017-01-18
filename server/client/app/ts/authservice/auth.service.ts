import { Injectable } from '@angular/core';
import { myConfig } from './auth.config';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

//to avoid editor errors
declare var Auth0Lock: any;

@Injectable()
export class AuthService{

    private lock=new Auth0Lock(myConfig.clientID, myConfig.domain,
     {
      /* auth: {
            redirectUrl: location.origin + '/#/login',
            responseType: 'token'
        }*/
     }     
    );        

    constructor(private router: Router){    
        this.lock.on("authenticated", (authResult)=>{
            console.log("Authenticated");
            console.log(authResult);
            localStorage.setItem('id_token', authResult.idToken);
        });        
    }

    public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated(): boolean {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  }

}
