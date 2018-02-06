import { Component, OnInit, Input } from '@angular/core';
import { Loja } from '../model/loja.model';
import { RealizarCompraService } from 'app/realizar-compra/realizar-compra.service';

@Component({
  selector: 'app-listagem-lojas',
  templateUrl: './listagem-lojas.component.html',
  styleUrls: ['./listagem-lojas.component.scss']
})
export class ListagemLojasComponent implements OnInit {

  @Input()
  _filtro: string;
  lojas: Loja[];

  filteredItems: Loja[];

  constructor(private servico: RealizarCompraService) { }

  ngOnInit() {
    this.servico.getLojas()
      .subscribe((res: any) => {
        this.lojas = res.Lojas;
        this.filteredItems = this.lojas;
      });
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
