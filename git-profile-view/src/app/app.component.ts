import { Component } from '@angular/core';
import {ProfileComponent} from './component/profile.component';
import {GithubService} from './services/github.service';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers : [HttpModule,GithubService]
})
export class AppComponent {
  
}
