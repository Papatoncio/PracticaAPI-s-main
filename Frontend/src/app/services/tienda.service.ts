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
  private URL1 = 'http://localhost:4000/api/products';
  constructor(private htt: HttpClient) {}

  getProducts(): Observable<Product[]>{
    return this.htt.get<Product[]>(this.URL + '/products');
  } createProduct(product:Product):Observable<Product[]>{
    return this.htt.post<Product[]>(this.URL + '/products', product);
  }

  getProduct() {
    return this.htt.get(this.URL + '/products');
  }
}
