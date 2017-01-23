'use strict'
let jsonFile=require('jsonfile');

export class Users{
    
    constructor(){
       
    }

    public readFile(): any{      
        return jsonFile.readFileSync('./server/js/usersAPI/users.json'); 
    }  
    
}

