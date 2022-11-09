import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Injectable({
    providedIn: 'root',
})
export class FbLoginService {
    socialUser: SocialUser;
    isLogin: boolean;
    constructor(private socialAuthService: SocialAuthService, private router:Router) {
        this.isLogin = false;
    }

    //Mandar Datos del Usuario
    public facebookUserData() {
        this.socialAuthService.authState.subscribe((user) => {
            console.log('Datos del Usuario');
            console.log(user);
            console.log();

            this.socialUser = user;
            this.isLogin = (user != null);
            console.log('hola');
            console.log(this.isLogin);
            if(this.isLogin == true){
              this.router.navigate(['/tienda']);
            }
            
            if(this.isLogin == false){
              this.router.navigate(['/signin']);
            }
        });
    }

    //Login con Facebook
    loginWithFacebook():void{
        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
      }
    
      signOut():void{
        this.socialAuthService.signOut();
        this.router.navigate(['/signin']);
      }
    
      showLoggedIn(){
        let res = this.isLogin.valueOf();
        console.log(res);
      }

      public isLoginNav(){
        return this.isLogin;
      }
}