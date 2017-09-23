import { AuthGuardService } from './shared/guard/auth-guard.service';
import { ChatMessagesService } from './shared/message/chat-messages.service';
import { DataService } from './shared/data/data.service';
import { UserAuthService } from './shared/user-auth.service';
import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { ChatRoomComponent } from './components/room/chat-room/chat-room.component';

import { AppRoutes } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeedComponent } from './components/room/feed/feed.component';
import { MessageComponent } from './components/room/message/message.component';
import { UserListComponent } from './components/room/user-list/user-list.component';
import { ChatFormComponent } from './components/room/chat-form/chat-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ChatRoomComponent,
    NavbarComponent,
    FeedComponent,
    MessageComponent,
    UserListComponent,
    ChatFormComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    DataService,
    UserAuthService,
    AuthGuardService,
    ChatMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
