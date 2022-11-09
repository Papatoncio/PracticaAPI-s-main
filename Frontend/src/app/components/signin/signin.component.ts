import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { FbLoginService } from 'src/app/services/fbLogin.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  socialUser: SocialUser;
  isLoginIf: boolean;

  constructor(private authService: AuthService, private router: Router, public fbLoginService: FbLoginService) {
    
  }

  ngOnInit(): void {
    //Manda Datos del Usuario con Facebook
    this.fbLoginService.facebookUserData();
    
  }

  //Login Base de Datos
  signIn() {
    this.authService.signIn(this.user).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('name', res.name);        
        this.router.navigate(['/tienda']).then(() => {
          window.location.reload();
        });
      },
      (err) => {
        console.log(err);
        window.alert(err.error.message);
      }
    );
  }

  //Login Facebook
  loginWithFacebook():void{
    this.fbLoginService.loginWithFacebook();
    this.isLoginIf = (this.fbLoginService.loginWithFacebook != null);;
  }

  signOut():void{
    this.fbLoginService.signOut();
    this.isLoginIf = false;
  }

  showLoggedIn(){
    this.fbLoginService.showLoggedIn();
  }

  //Navegacion con metodo
  routerNavigateMethod(ruta:String){
    this.router.navigate([ruta]);
  }
}
