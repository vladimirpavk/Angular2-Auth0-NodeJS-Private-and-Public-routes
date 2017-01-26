# Angular2, NodeJS, Auth0
Example for protecting both server and client side routes using JWTs

Server side route we are protecting is https://localhost:3036/users or appropriate browser-sync proxy. This route returns
a text/json. For JWTs check use *express-jwt*.

Client side route we are protecting is http://localhost:3036/#/home. For JWTs check use *angular2-jwt* module.

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