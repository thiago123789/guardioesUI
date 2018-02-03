import { Component, OnInit } from '@angular/core';
import { Loja } from '../model/loja.model';

@Component({
  selector: 'app-listagem-lojas',
  templateUrl: './listagem-lojas.component.html',
  styleUrls: ['./listagem-lojas.component.scss']
})
export class ListagemLojasComponent implements OnInit {

  lojas = [
    <Loja>{"nome": "Quentinha da Maria", "endereco": "Olinda, no fim do mundo", "media_avaliacoes": 4.5 },
    <Loja>{"nome": "Formigão Lanches", "endereco": "Dona Lindu", "media_avaliacoes": 3.0}
  ];

  constructor() { }

  ngOnInit() {
  }

}
