import { SignUpUser } from './../model/sing-up.model';
import { User } from './../model/user.model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserCredentials } from './../model/login.model';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Injectable()
export class UserAuthService {

  private authState: any;
  private user: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase,
    private router: Router
  ) {
    this.user = afAuth.authState;
  }

  get currentUserID() {
    return this.authState !== null ? this.authState.uid : '';
  }

  authUser() {
    return this.user;
  }

  private loginUserWith(credential: firebase.auth.AuthCredential) {
    return this.afAuth.auth.signInWithPopup(credential);
  }

  loginAsGoogle() {
    return this.loginUserWith(new firebase.auth.GoogleAuthProvider);
  }

  login(user: UserCredentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        this.authState = user;
        this.setUserStatus('online');
        this.router.navigate(['chat']);
      });
  }

  signUpUser(userSignUpCred: SignUpUser) {
    return this.afAuth.auth.createUserWithEmailAndPassword(userSignUpCred.email, userSignUpCred.password)
      .then((user) => {
        this.authState = user;
        const status = 'online';

        const signUpData: User = {
          email: userSignUpCred.email,
          displayName: userSignUpCred.displayName,
          status: status,
        };

        this.setUserData(signUpData);

        this.router.navigate(['login']);
      });
  }

  private setUserData(user: User): void {
    const path = `users/${this.currentUserID}`;

    const userData: User = {
      email: user.email,
      displayName: user.displayName,
      status: user.status
    };

    this.afDb.object(path).update(userData)
      .catch(err => console.log(err));
  }

  private setUserStatus(status: string): void {
    const path = `users/${this.currentUserID}`;

    const data = {
      status: status
    };

    this.afDb.object(path).update(data)
      .catch(err => console.log(err));
  }

  singOutUser() {
    this.afAuth.auth.signOut();
    this.setUserStatus('offline');
    this.router.navigate(['/login']);
  }
}
