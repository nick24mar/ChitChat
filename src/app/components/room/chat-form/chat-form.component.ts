import { ChatMessagesService } from './../../../shared/message/chat-messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  newMessage: string;

  constructor(private messageService: ChatMessagesService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

}
