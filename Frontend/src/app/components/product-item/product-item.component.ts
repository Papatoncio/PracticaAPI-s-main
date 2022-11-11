import { MessageService } from './../../services/message.service';
import { Product } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  constructor(
    private messageService: MessageService, private tiendaService:TiendaService
  ) { }

  ngOnInit(): void {
  }

  addToCart(): void {
    this.messageService.sendMessage(this.product);
  }

}
