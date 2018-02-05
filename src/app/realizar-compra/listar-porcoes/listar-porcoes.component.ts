import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/finally';

import { RealizarCompraService } from '../realizar-compra.service';
import { Porcao } from '../../share/model/porcao.model';

@Component({
  selector: 'app-listar-porcoes',
  templateUrl: './listar-porcoes.component.html',
  styleUrls: ['./listar-porcoes.component.scss']
})
export class ListarPorcoesComponent implements OnInit {

  @Input()
  lojaId: number;

  listaPorcoes: Porcao[];

  itensCarregados = false;
  constructor(private service: RealizarCompraService) { }

  ngOnInit() {
    this.service.getPorcoes(this.lojaId)
      .finally(() =>{
        this.itensCarregados = false;
      })
      .subscribe((res) => {
        this.itensCarregados = true;
        this.listaPorcoes = res;
      });
  }

}
