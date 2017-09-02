import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  moduleId : module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',

})
export class ProfileComponent {

user=[];
repos=[];
username:string;

    
constructor(private _githubservie:GithubService){


}

searchuser  (){


    this._githubservie.userUpdate(this.username);

    this._githubservie.getUser().subscribe(user => {
        //console.log(user);
        this.user = user;
    })

    this._githubservie.getrepos().subscribe(repos => {
        //console.log(repos);
        this.repos = repos;
    })


}

}
