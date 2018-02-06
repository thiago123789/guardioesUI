import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/finally';

import { RealizarCompraService } from '../realizar-compra.service';
import { Porcao } from '../../shared/model/porcao.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-porcoes',
  templateUrl: './listar-porcoes.component.html',
  styleUrls: ['./listar-porcoes.component.scss']
})
export class ListarPorcoesComponent implements OnInit {

  @Input()
  lojaId: number;

  listaPorcoes: Porcao[];
  haveItens = false;

  itensCarregados = false;
  constructor(private service: RealizarCompraService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.lojaId = this.activeRoute.parent.snapshot.params['idLoja'];
   

    this.service.getPorcoes(this.lojaId)
      .finally(() =>{
        this.itensCarregados = true;
      })
      .subscribe((res: any) => {
        this.itensCarregados = false;
        console.log(res);

        this.listaPorcoes = res.Porcoes;
        console.log(this.listaPorcoes);
        if(this.listaPorcoes.length > 0){
          this.haveItens = true;
        }
      });
  }

}
