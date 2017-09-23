import { ChatMessage } from './../../model/chat-message.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

import * as firebase from 'firebase/app';

@Injectable()
export class DataService {
  private messages: FirebaseListObservable<ChatMessage[]>;
  private user: firebase.User;
  private userName: string;

  constructor(private afAuth: AngularFireAuth, private afDB: AngularFireDatabase) {
    this.messages = this.getAllMessages();

    afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;

        this.getUser().subscribe(user => {
          this.userName = user.displayName;
        });
      }
    });
  }

  get userDisplayName() {
    return this.userName;
  }

  getUser() {
    const userID = this.user.uid;
    const path = `/users/${userID}`;

    return this.afDB.object(path);
  }

  getUsers() {
    //const userID = this.user.uid;
    const path = '/users';

    return this.afDB.list(path);
  }

  getAllMessages() {
    return this.afDB.list('/messages', {
      query: {
        limitToLast: 25,
        orderByKey: true
      }
    });
  }

  sendMessage(newMessage: string) {
    const message: ChatMessage = {
      message: newMessage,
      user: this.userName,
      timestamp: Date.now()
    };
    return this.messages.push(message);
  }

}
