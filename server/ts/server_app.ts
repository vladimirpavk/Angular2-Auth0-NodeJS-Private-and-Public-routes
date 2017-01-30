/// <reference path="../../typings/index.d.ts" />
import * as express from 'express';
import * as path from 'path';
import * as jwt from 'express-jwt';
import * as cors from 'cors';

import { Users } from './usersAPI/usersAPI';
import { User } from './usersAPI/user.class';

export class ServerApp {
    private _app: express.Express;
    private _port: number;
    private _users: Users;   

    constructor(port: number){
        this._app = express();
        this._app.use(cors());
        
        this._port = port;
        this._users= new Users();                  

        //this._app.get('/', this._renderPage);           
        this._app.use('/node_modules', express.static(path.resolve(__dirname, '../../node_modules')));
        this._app.use('/www', express.static(path.resolve(__dirname, '../client')));
        
        let jwtCheck = jwt({
            secret: new Buffer('mWjrEcHoJqen2j7_50wtyOArgVFbqEsdogdM4jAmB2l3T-eieXJBg6ECXl8FPH6i', 'base64'),
                    audience: 'ZCQZGEfRBplS91vkwBOe4EIGa8FnpkiQ'
        });

        this._app.use('/users', jwtCheck);            
        this._app.get('/users', (req, res) => this._renderUsers(req, res));

        this._app.get('*', (req, res)=>{
          /*  console.log("Redirected from *");
            res.redirect('/');*/
            res.sendFile(path.resolve(__dirname, '../client/index.html'));
        });                       
     }       

    private _renderUsers(req: express.Request, res: express.Response){         
        res.status(200).json(this._users.getAllUsers());          
    }

    private _renderPage(req: express.Request, res: express.Response){ 
        console.log("angular route requested...");                     
        res.sendFile(path.resolve(__dirname, '../client/index.html'));
    }

    public startServer(){
        this._app.listen(this._port, ()=>{
            console.log("Server is listening at port "+this._port);
        });        
    }
    
};