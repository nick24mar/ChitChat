import { AuthGuardService } from './shared/guard/auth-guard.service';
import { ChatRoomComponent } from './components/room/chat-room/chat-room.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'chat', component: ChatRoomComponent, canActivate:[AuthGuardService] },
    { path: '', redirectTo: '/chat', pathMatch: 'full' }
];