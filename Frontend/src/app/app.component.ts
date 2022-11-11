import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { FbLoginService } from './services/fbLogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = localStorage.getItem('name');
  role = localStorage.getItem('role');

  constructor(
    public authService: AuthService,
    public fbLoginService: FbLoginService
  ) {}

  validRole() {
    if (this.role == 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
