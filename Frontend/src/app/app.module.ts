import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { CRUDProductsComponent } from './components/crud-products/crud-products.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { PokeappComponent } from './components/pokeapp/pokeapp.component';
import { MapboxComponent } from './components/mapbox/mapbox.component';
import { SocialAuthServiceConfig, FacebookLoginProvider, SocialUser, SocialLoginModule } from 'angularx-social-login';
import { ModalComponent } from './components/modal/modal.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StreamComponent } from './components/stream/stream.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CRUDProductsComponent,
    TiendaComponent,
    PokeappComponent,
    MapboxComponent,
    ModalComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    ProductListComponent,
    StreamComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, SocialLoginModule, NgxPayPalModule, NgxSpinnerModule],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1240578866731098'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent],
})
export class AppModule { }
