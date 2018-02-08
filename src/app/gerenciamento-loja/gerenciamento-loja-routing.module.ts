import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPorcaoComponent } from './cadastro-porcao/cadastro-porcao.component';
import { CadastroPratoComponent } from './cadastro-prato/cadastro-prato.component';
import { ListagemLojasComponent } from 'app/shared/listagem-lojas/listagem-lojas.component';
import { GerenciamentoLojaHomeComponent } from 'app/gerenciamento-loja/gerenciamento-loja-home/gerenciamento-loja-home.component';
import { CriarPorcaoPratoComponent } from 'app/gerenciamento-loja/criar-porcao-prato/criar-porcao-prato.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'vendedor/:idVendedor',
        component: GerenciamentoLojaHomeComponent,
        children: [
          {
            path: 'loja/:idLoja/criar-porcao-prato',
            component: CriarPorcaoPratoComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciamentoLojaRoutingModule { }
