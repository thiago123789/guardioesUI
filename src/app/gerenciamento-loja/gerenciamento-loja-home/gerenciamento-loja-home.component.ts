import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciamento-loja-home',
  templateUrl: './gerenciamento-loja-home.component.html',
  styleUrls: ['./gerenciamento-loja-home.component.scss']
})
export class GerenciamentoLojaHomeComponent implements OnInit {

  nomeFiltro: string;

  constructor() { }

  ngOnInit() {
  }

}
