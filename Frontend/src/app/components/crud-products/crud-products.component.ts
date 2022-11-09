import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-products',
  templateUrl: './crud-products.component.html',
  styleUrls: ['./crud-products.component.css'],
})
export class CRUDProductsComponent implements OnInit {
  product = {
    name: '',
    category: '',
    description: '',
    price: 0,
    stock: 0,
    imgUrl: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
