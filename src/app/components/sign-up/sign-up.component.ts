import { Router } from '@angular/router';
import { UserAuthService } from './../../shared/user-auth.service';
import { SignUpUser } from './../../model/sing-up.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string;
  password: string;
  displayName: string;
  errMsg: string;

  constructor(private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    const user: SignUpUser = {
      email: this.email,
      password: this.password,
      displayName: this.displayName
    };

    this.userAuthService.signUpUser(user)
      .catch(err => this.errMsg = err.message);
  }
}
