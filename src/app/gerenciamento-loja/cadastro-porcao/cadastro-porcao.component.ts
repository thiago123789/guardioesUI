import { Component, OnInit } from '@angular/core';
import { GerenciamentoLojaService} from '../gerenciamento-loja.service';
import { GerenciamentoLojaModule } from 'app/gerenciamento-loja/gerenciamento-loja.module';
import { ActivatedRoute } from '@angular/router';
import { Porcao } from '../../shared/model/porcao.model';

@Component({
  selector: 'app-cadastro-porcao',
  templateUrl: './cadastro-porcao.component.html',
  styleUrls: ['./cadastro-porcao.component.scss']
})
export class CadastroPorcaoComponent implements OnInit {

  porcao: Porcao;

  constructor(private service: GerenciamentoLojaService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    
  }

  /*this.service.addPorcao(this.porcao)
  .subscribe();*/
}
