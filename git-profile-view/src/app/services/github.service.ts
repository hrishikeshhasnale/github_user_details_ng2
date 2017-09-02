import {Injectable} from '@angular/core';
import {Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '323d35a8834437adbd2f';
    private client_secret = 'd46cbd0ba150c2100951274a3bc9c9c5ec472dcf';


    constructor(private _http:Http){
        //this.username='hrishikeshhasnale';
    }

    getUser(){

        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json())
    }

    getrepos(){
        
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res => res.json())
    }

    userUpdate(username:string){

            this.username = username;
    }
} 