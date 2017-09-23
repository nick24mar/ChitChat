import { UserAuthService } from './../../../shared/user-auth.service';
import { ChatMessage } from './../../../model/chat-message.model';
import { ChatMessagesService } from './../../../shared/message/chat-messages.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  messages: FirebaseListObservable<ChatMessage[]>;
  isLoaded: boolean = false;

  constructor(private chatMesssageService: ChatMessagesService) { }

  ngOnInit() {
    this.getMessages();
  }

  ngOnChanges() {
    this.getMessages();
  }

  private getMessages() {
    this.messages = this.chatMesssageService.getAllMessages();

    this.messages.subscribe(() => {
      this.isLoaded = true;
    });

  }

}
