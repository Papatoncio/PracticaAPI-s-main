import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product [];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
