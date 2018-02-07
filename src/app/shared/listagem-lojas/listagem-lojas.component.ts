import { Component, OnInit, Input } from '@angular/core';
import { Loja } from '../model/loja.model';
import { RealizarCompraService } from 'app/realizar-compra/realizar-compra.service';
import { GerenciamentoLojaService } from 'app/gerenciamento-loja/gerenciamento-loja.service';
import { ActivatedRoute } from '@angular/router';
import { NgSwitch } from '@angular/common';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-listagem-lojas',
  templateUrl: './listagem-lojas.component.html',
  styleUrls: ['./listagem-lojas.component.scss']
})
export class ListagemLojasComponent implements OnInit {

  @Input()
  vendedorId: number;
 
  @Input()
  isVendedor: boolean;
  lojas: Loja[];

  haveItens = false;
  filteredItems: Loja[];

  constructor(private servico: RealizarCompraService,
              private servicoGerenciamento: GerenciamentoLojaService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.vendedorId = this.activeRoute.snapshot.params['idVendedor'];

    if(this.isVendedor){
      this.servicoGerenciamento.getLojasVendedor(this.vendedorId)
        .finally(() => {
          this.validarQuantidade(this.lojas.length);
        })
        .subscribe((res: any) => {
          this.lojas = res.Lojas;
          this.filteredItems = this.lojas;
        });
    } else {
    this.servico.getLojas()
      .finally(() => {
        this.validarQuantidade(this.lojas.length);
      })
      .subscribe((res: any) => {
        this.lojas = res.Lojas;
        this.filteredItems = this.lojas;
      });
    }
  }

  validarQuantidade(value: any) {
    if(value > 0) {
      this.haveItens = true;
    }else{
      this.haveItens = false;
    }
  }

  @Input() set filtro(value: string){
    console.log(value);
    this.filterItem(value);
  }

  filterItem(value) {
    if(!value) this.filteredItems = this.lojas; //when nothing has typed
    this.filteredItems = Object.assign([], <Loja[]>this.lojas).filter(
       (item: Loja) => item.Nome.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
 }

}
