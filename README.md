# Angular2, NodeJS, Auth0
Example for protecting both server and client side routes using JWTs

Server side route we are protecting is *https://localhost:3036/users* or appropriate browser-sync proxy. This route returns
a text/json. For JWTs check use *express-jwt*.

Client side route we are protecting is *http://localhost:3036/#/home*. For JWTs check use *angular2-jwt* module.

The solution is different when we are using **Path** and **Hash** LocationStrategy.

###HashLocationStrategy
There is a workaround when we are using **HashLocationStrategy**.

We are initializing **Auth0Lock** component from *http://localhost:3036/#/login*. This route is configured as **Allowed callback URL** on auth0 account. But when Auth0Lock is returning a JWT it 
calls *http://localhost:3036/#access_token....* and we get URL not recognized error because we do not have this kind of route configured in *app.routes.ts*. 

```app.routes.ts
const appRoutes: Routes = [  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },  
  { path: 'home', component: HomeComponent },
  { path: 'pagenotfound', component: PageNotFoundComponent, canActivate: [AuthenticationCallbackActivateGuard] },  
  { path: '**', redirectTo: '/pagenotfound' }  
];
```

The workaround is that we handle this as a default route (path:'*') redirect to */pagenotfound* guarded by **AuthenticationCallbackActivateGuard**.

The **AuthenticationCallbackActivateGuard** looks like this:
```
export class AuthenticationCallbackActivateGuard implements CanActivate {

  constructor(private router: Router, private location: Location) { }

  canActivate() {
    var path = this.location.path(true);

    // You may want to make a more robust check here
    var isAuthenticationCallback = path.indexOf("access_token") !== -1;

    console.log(isAuthenticationCallback);

    if (isAuthenticationCallback) {
      this.router.navigate(['/login'], { fragment: path });

      return false;
    }

    return true;
  }
```

It checks if the URL contains the *access_token* and if it does  **AuthenticationCallbackActivateGuard** assumes that it is JWT and redirects to **/login**. That way we deliver the
JWT from *http://localhost/#access_token...* to *http://localhost:3036/#/login*.


###PathLocationStrategy

It is neccessary to change server route configuration. Server must redirect unhandled routes to a route that renders *index.js* (Angular2 - start point) file. 

```
  this._app.get('*', (req, res) => {
            res.redirect('/');
        });
```

We do not have to use Active Guard any more.


**Auth0 application account configuration**
Allowed Callback URLs http://localhost:3000/#/login

### Based on ExpressTSAngular2
Node, Express, TypeScript, Gulp, BrowserSync, Angular2 application skeleton.

Provided for developing **Angular2** applications using **Typescript** served over **node-express** server.

### Prerequisites
Must have node and npm installed

### How to use
Install node dependencies in your project root directory (this is where the 'package.json' file is located) using:
```sh
$ npm install
``` 
Install typescript definitions using:
```sh
$ typings install
```

Start application with 
```sh
$ gulp
```

Application will be initialy compiled and started. By default the server is listening on port 3036. Browser synchronization is configured in proxy mode. Client application (Angular2) can be accessed through your web browser on the following url **localhost:3036/angular**. If everything is ok you should see the message *"My Second Angular App"*. displayed in your browser.

### Under the hood

**Server application** in *typescript* is located in **./server/ts** files folder. 

Folder **./server/js** contains transpiled server application and is populated by gulp build system. Folder contains files needed for deployment. Server application is compiled whenever you make changes to any file in **./server/ts** folder.

**Server application** is **node-express** web server initialy configured to listen for requests on **localhost:3036/angular**. 


**Client application** in *typescript* is located in **./client/app/ts** files folder.

Folder **./client/app/js** (reach with /js) contains transpiled client application and is populated by gulp build system. Folder contains files needed for deployment. Client application is compiled whenever you make changes to any file in **./client/app/ts** folder. 

Folder **./client/app/ts** (reach with /ts) contains following files

```
app.component.ts
app.module.ts
main.ts
```
taken from the official Angular2 web page quickstart https://angular.io