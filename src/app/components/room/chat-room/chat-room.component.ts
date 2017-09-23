import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent implements OnInit, AfterViewChecked {

  @ViewChild('scroller') private feedContainer: ElementRef;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.ifNotLogin();
  }

  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop 
      = this.feedContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private ifNotLogin() {
    this.afAuth.authState
      .subscribe(auth => {
        if (!auth) {
          this.router.navigate(['login']);
        }
      })
  }

}
