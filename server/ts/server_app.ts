/// <reference path="../../typings/index.d.ts" />
import * as express from 'express';
import * as path from 'path';
import { Users } from './usersAPI/usersAPI';
var usersJSON=require('./usersAPI/users.json');
import { User } from './usersAPI/user.class';

export class ServerApp {
    private _app: express.Express;
    private _port: number;
    private _users: Users;

    constructor(port: number){
        this._app = express();
        this._port = port;
        this._users= new Users();                  

        this._app.get('/', this._renderPage);           
        this._app.use('/node_modules', express.static(path.resolve(__dirname, '../../node_modules')));
        this._app.use('/www', express.static(path.resolve(__dirname, '../client')));
        
        this._app.get('/users', (req, res) => this._renderUsers(req, res));              
     }       

    private _renderUsers(req: express.Request, res: express.Response){         
        res.status(200).json(this._users.getAllUsers());   
        let tempUser=new User();
        tempUser.id=5;
        tempUser.name="Nikola";
        tempUser.lastname="Simic";
        tempUser.picture=null;
        this._users.addUser(tempUser);
        this._users.writeFile();
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