import { User } from './../../../model/user.model';

import { FirebaseListObservable } from 'angularfire2/database';
import { ChatMessagesService } from './../../../shared/message/chat-messages.service';
import { UserAuthService } from './../../../shared/user-auth.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<firebase.User[]>;

  constructor(private userDataService: ChatMessagesService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  private getAllUsers() {
    this.users = this.userDataService.getUsers();
  }

}
