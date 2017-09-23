import { UserCredentials } from './../../model/login.model';
import { UserAuthService } from './../../shared/user-auth.service';
import { Component} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  email: string;
  password: string;
  errMsg: string;

  constructor(private authService: UserAuthService, private router: Router) { }

  loginUser() {
    let user: UserCredentials = {
      email: this.email,
      password: this.password
    }

    this.authService.login(user)
      .catch( error => this.errMsg = error.message);
  }

}
