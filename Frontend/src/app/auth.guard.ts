import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { FbLoginService } from './services/fbLogin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private fbLoginService:FbLoginService) {}

  canActivate() {
    if (this.authService.loggedIn()) {
      return true;
    }

    if (this.fbLoginService.isLogin == true){
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }
}
