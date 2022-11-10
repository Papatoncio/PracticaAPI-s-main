import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TiendaService } from '../../services/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  products = [
    { name: '' },
    { category: '' },
    { description: '' },
    { price: 0 },
    { stock: 0 },
    { imgUrl: '' },
  ];
  constructor(private tiendaService: TiendaService) {}

  ngOnInit(): void {
    this.tiendaService.getProduct().subscribe(
      (res: any) => {
        this.products = res;
      },
      (err) => console.log(err)
    );
  }
}
