let jsonFile=require('jsonfile');

import { User } from './user.class';

export class Users{
    
    private _allUsers: User[];
    private _filename: string;

    constructor(){

        this._filename='./server/js/usersAPI/users.json';
        this._allUsers=jsonFile.readFileSync(this._filename);

    }    

    public getAllUsers(): User[]{
       return this._allUsers;
    }
   
    public getRandomUser(): User{
       return this._allUsers[Math.ceil(Math.random()*this._allUsers.length)];
    }

    private _compare(element:User, id:number){
        console.log('elementid: '+ element.id+' ,id: '+id);        
        return element.id==id; 
    }

    public getUserId(id: number): User{
       return this._allUsers.find(this._compare, id);       
    }

    public addUser(user: User):void{    
        console.log(this.getUserId(5));

        if(!this.getUserId(user.id)){
            this._allUsers.push(user);
        }
        else{
            console.log("Duplicate id entry...");
        }
    }

    public writeFile():void{
        jsonFile.writeFileSync(this._filename, this._allUsers);
    }
}

