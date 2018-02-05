import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciamentoLojaRoutingModule } from './gerenciamento-loja-routing.module';
import { CadastroPorcaoComponent } from './cadastro-porcao/cadastro-porcao.component';
import { CadastroPratoComponent } from './cadastro-prato/cadastro-prato.component';

@NgModule({
  imports: [
    CommonModule,
    GerenciamentoLojaRoutingModule
  ],
  declarations: [CadastroPorcaoComponent, CadastroPratoComponent]
})
export class GerenciamentoLojaModule { }
