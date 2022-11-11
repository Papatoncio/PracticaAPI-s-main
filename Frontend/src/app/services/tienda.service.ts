import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  private URL = 'http://localhost:4000/api';

  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get(this.URL + '/products');
  }

  //Error en el backend, agrega el producto pero crashea el backend
  createProduct(product: any, token: any) {
    return this.http.post(this.URL + '/products', product, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
    });
  }
}
