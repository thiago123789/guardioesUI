import { Component, OnInit } from '@angular/core';
import { GerenciamentoLojaService} from '../gerenciamento-loja.service';
import { GerenciamentoLojaModule } from 'app/gerenciamento-loja/gerenciamento-loja.module';
import { ActivatedRoute } from '@angular/router';
import { Prato } from '../../shared/model/prato.model';

@Component({
  selector: 'app-cadastro-prato',
  templateUrl: './cadastro-prato.component.html',
  styleUrls: ['./cadastro-prato.component.scss']
})
export class CadastroPratoComponent implements OnInit {

  prato: Prato;

  constructor(private service: GerenciamentoLojaService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    /*this.service.addPrato(this.prato)
    .subscribe();*/
  }

}
