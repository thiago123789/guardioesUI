import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GerenciamentoLojaRoutingModule } from './gerenciamento-loja-routing.module';
import { CadastroPorcaoComponent } from './cadastro-porcao/cadastro-porcao.component';
import { CadastroPratoComponent } from './cadastro-prato/cadastro-prato.component';
import { GerenciamentoLojaHomeComponent } from './gerenciamento-loja-home/gerenciamento-loja-home.component';
import { ListagemLojasComponent } from 'app/shared/listagem-lojas/listagem-lojas.component';
import { GerenciamentoLojaService } from 'app/gerenciamento-loja/gerenciamento-loja.service';
import { StarterModule } from 'app/starter/starter.module';

@NgModule({
  imports: [
    CommonModule,
    GerenciamentoLojaRoutingModule,
    FormsModule,
    StarterModule
  ],
  declarations: [
    CadastroPorcaoComponent,
    CadastroPratoComponent,
    GerenciamentoLojaHomeComponent
  ],
  providers: [
    GerenciamentoLojaService
  ]
})
export class GerenciamentoLojaModule { }
