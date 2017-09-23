import { DataService } from './../../shared/data/data.service';
import { Router } from '@angular/router';
import { UserAuthService } from './../../shared/user-auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;
  isLogin: boolean;

  constructor(
    private afAuth: AngularFireAuth,
    private dataService: DataService,
    private userAuthService: UserAuthService,
    private router: Router) { }

  ngOnInit() {
    this.userAuthCheck();
  }

  private userAuthCheck() {
    this.afAuth.authState.subscribe((auth) => {
      if (auth !== undefined && auth !== null) {
        this.user = this.dataService.getUser();
        this.isLogin = true;
      }
      else {
        this.isLogin = false;
      }
    })
  }

  logoutUser() {
    this.userAuthService.singOutUser();
  }

}
