import { Component, OnInit } from '@angular/core';
import { Porcao } from 'app/shared/model/porcao.model';

@Component({
  selector: 'app-lista-porcoes-prato',
  templateUrl: './lista-porcoes-prato.component.html',
  styleUrls: ['./lista-porcoes-prato.component.scss']
})
export class ListaPorcoesPratoComponent implements OnInit {

  listaPorcoes: Porcao[];



  constructor() { }

  ngOnInit() {
  }

}
