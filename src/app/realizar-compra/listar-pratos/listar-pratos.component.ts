import { Component, OnInit, Input } from '@angular/core';
import { RealizarCompraService } from '../realizar-compra.service';
import { Prato } from '../../shared/model/prato.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-pratos',
  templateUrl: './listar-pratos.component.html',
  styleUrls: ['./listar-pratos.component.scss']
})
export class ListarPratosComponent implements OnInit {

  @Input()
  lojaId: number;

  listaPratos: Prato[];
  haveItens = true;

  itensCarregados = false;
  constructor(private service: RealizarCompraService, private activeRoute: ActivatedRoute) { }



  ngOnInit() {
    this.lojaId = this.activeRoute.parent.snapshot.params['idLoja'];
  
    this.service.getPratos(this.lojaId)
      .finally(() =>{
        this.itensCarregados = true;
        if (this.listaPratos.length > 0) {
          this.haveItens = true;
        } else {
          this.haveItens = false;
        }
      })
      .subscribe((res: any) => {
        this.itensCarregados = false;
        this.listaPratos = res.Pratos;
        if(this.listaPratos.length > 0) {
          this.haveItens = true;
        }
      });
  }

}
