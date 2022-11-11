import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';

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

  token = localStorage.getItem('token');

  constructor(private tiendaService: TiendaService) {}

  ngOnInit(): void {}

  createProduct() {
    this.tiendaService.createProduct(this.product, this.token).subscribe(
      (res: any) => {
        window.alert(res.message);
        window.location.reload();
      },
      (err) => {
        window.alert(err.error);
      }
    );
  }
}
