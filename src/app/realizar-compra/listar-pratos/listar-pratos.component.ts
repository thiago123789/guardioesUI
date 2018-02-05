import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar-pratos',
  templateUrl: './listar-pratos.component.html',
  styleUrls: ['./listar-pratos.component.scss']
})
export class ListarPratosComponent implements OnInit {

  @Input()
  lojaId: number;

  constructor() { }

  ngOnInit() {
  }

}
