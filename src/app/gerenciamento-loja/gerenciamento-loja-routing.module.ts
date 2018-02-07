import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPorcaoComponent } from './cadastro-porcao/cadastro-porcao.component';
import { CadastroPratoComponent } from './cadastro-prato/cadastro-prato.component';
import { ListagemLojasComponent } from 'app/shared/listagem-lojas/listagem-lojas.component';
import { GerenciamentoLojaHomeComponent } from 'app/gerenciamento-loja/gerenciamento-loja-home/gerenciamento-loja-home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'vendedor/:idVendedor/loja/:idLoja',
        component: GerenciamentoLojaHomeComponent,
        children: [
          {
            path: 'prato',
            component: CadastroPratoComponent
          },
          {
            path: 'porcao',
            component: CadastroPorcaoComponent
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
