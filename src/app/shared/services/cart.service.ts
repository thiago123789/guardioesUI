import { Injectable } from '@angular/core';
import { Prato } from '../model/prato.model';

@Injectable()
export class CartService {

  private pratos = Array<Prato>();

  constructor() { }

  addPrato(prato: Prato) {
    this.pratos.push(prato);
  }

  listar() : Prato[] {
    return this.pratos;
  }

  

}
