import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  private URL = 'http://localhost:4000/api';
  constructor(private htt: HttpClient) {}

  getProduct() {
    return this.htt.get(this.URL + '/products');
  }
}
