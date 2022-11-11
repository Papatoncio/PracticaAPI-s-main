import { Product } from './../../models/product';
import { TiendaService } from 'src/app/services/tienda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: Product[] = [];

  constructor(
    private tiendaService: TiendaService
  ) { }

  ngOnInit(): void {
    this.tiendaService.getProducts()
    .subscribe(data =>{
      this.product = data;
    })
  }
}
