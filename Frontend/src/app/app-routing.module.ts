import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { TiendaComponent } from './components/tienda/tienda.component';
import { CRUDProductsComponent } from './components/crud-products/crud-products.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './auth.guard';
import { PokeappComponent } from './components/pokeapp/pokeapp.component';
import { MapboxComponent } from './components/mapbox/mapbox.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StreamComponent } from './components/stream/stream.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tienda',
    pathMatch: 'full',
  },
  {
    path: 'tienda',
    component: TiendaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crudTienda',
    component: CRUDProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'pokedex',
    component: PokeappComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'mapbox',
    component: MapboxComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'stream',
    component: StreamComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
