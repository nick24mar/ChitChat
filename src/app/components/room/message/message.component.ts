import { ChatMessage } from './../../../model/chat-message.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input('chatMessage') chatMessages: ChatMessage;
  messageContent: string;
  userName: string;
  timeStamp = Date.now();

  constructor() { }

  ngOnInit(chatMessage = this.chatMessages) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timestamp;
    this.userName = chatMessage.user;
  }

}
