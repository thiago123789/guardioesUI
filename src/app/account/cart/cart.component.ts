import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/shared/services/cart.service';
import { Prato } from 'app/shared/model/prato.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  listaPratos: Prato[];

  constructor(private service : CartService) { }

  ngOnInit() {
    this.listaPratos = this.service.listar();
  }

}
