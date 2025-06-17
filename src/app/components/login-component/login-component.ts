import { Component } from '@angular/core';
import {UserService} from '../../services/UserService';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [
    FormsModule
  ],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
  loginEmail: string = '';
  loginPassword: string = '';
  registerEmail: string = '';
  registerPassword: string = '';
  registerUsername: string = '';

constructor(private service: UserService, private router: Router) {
}

onLogin(loginEmail: string, loginPassword: string) {
  const success = this.service.login(loginEmail, loginPassword);

  if (success) {
    //redirect
    this.router.navigate(['/']);
  }
}

onRegister(username: string, email: string, password: string) {
  const success = this.service.register({ username, email, password });

  if (success) {
    //redirect
    this.router.navigate(['/']);
  }
}
}
