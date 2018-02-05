import { Component, OnInit, Input } from '@angular/core';
import { RealizarCompraService } from '../realizar-compra.service';
import { Prato } from '../../share/model/prato.model';

@Component({
  selector: 'app-listar-pratos',
  templateUrl: './listar-pratos.component.html',
  styleUrls: ['./listar-pratos.component.scss']
})
export class ListarPratosComponent implements OnInit {

  @Input()
  lojaId: number;

  listaPratos: Prato[];

  itensCarregados = false;
  constructor(private service: RealizarCompraService) { }

  ngOnInit() {
    this.service.getPratos(this.lojaId)
      .finally(() =>{
        this.itensCarregados = false;
      })
      .subscribe((res) => {
        this.itensCarregados = true;
        this.listaPratos = res;
      });
  }

}
