import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  product: Product[];
  private URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL + '/products');
  } createProducts(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(this.URL + '/products', product);
  }

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
