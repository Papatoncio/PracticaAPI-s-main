import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { TiendaService } from '../../services/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  product: Product[] = [];
  constructor(private tiendaService: TiendaService, private router:Router) {}

  ngOnInit(): void {
    this.tiendaService.getProducts()
    .subscribe(data => {
      this.product = data;
    })
  }
}
