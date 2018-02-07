import { Component, OnInit, Input } from '@angular/core';
import { RealizarCompraService } from 'app/realizar-compra/realizar-compra.service';
import { Porcao } from 'app/shared/model/porcao.model';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-listar-porcoes-prato',
  templateUrl: './listar-porcoes-prato.component.html',
  styleUrls: ['./listar-porcoes-prato.component.scss']
})
export class ListarPorcoesPratoComponent implements OnInit {

  @Input()
  idPrato: number;

  precoPrato: number;
  listaPorcoes: Porcao[];

  listando = true;
  constructor(private servico: RealizarCompraService) { }

  ngOnInit() {
    this.servico.getPorcoesPrato(this.idPrato)
      .finally(() => {
        this.listando = false;
      })
      .subscribe((res: any) => {
        this.listando = true;
        this.listaPorcoes = res.Porcoes;
      })
  }

}
