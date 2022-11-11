import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  product:Product[];
  private URL = 'http://localhost:4000/api';
<<<<<<< HEAD
  private URL1 = 'http://localhost:4000/api/products';
  constructor(private htt: HttpClient) {}
=======

  constructor(private http: HttpClient) {}
>>>>>>> 04e1990927298996a50e72549ade71cea537c4e4

  getProducts(): Observable<Product[]>{
    return this.htt.get<Product[]>(this.URL + '/products');
  } createProduct(product:Product):Observable<Product[]>{
    return this.htt.post<Product[]>(this.URL + '/products', product);
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
