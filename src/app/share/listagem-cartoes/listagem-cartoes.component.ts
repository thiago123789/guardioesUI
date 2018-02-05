import { Component, OnInit, Input } from '@angular/core';
import { Cartao } from '../model/cartao.model';

@Component({
  selector: 'app-listagem-cartoes',
  templateUrl: './listagem-cartoes.component.html',
  styleUrls: ['./listagem-cartoes.component.scss']
})
export class ListagemCartoesComponent implements OnInit {

  // @Input()
  // clienteId;

  cartoes = [
    <Cartao>{'nome': 'Maria Quentinha', 'validade': '01/26', 'numero': '5555 5555 5555 5555'},
    <Cartao> {'nome': 'Formigão dos lanches', 'validade': '02/28', 'numero': '6666 6666 6666 6666'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
