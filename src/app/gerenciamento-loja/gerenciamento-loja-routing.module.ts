import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPorcaoComponent } from './cadastro-porcao/cadastro-porcao.component';
import { CadastroPratoComponent } from './cadastro-prato/cadastro-prato.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'porcao',
        component: CadastroPorcaoComponent
      },
      {
        path: 'prato',
        component: CadastroPratoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciamentoLojaRoutingModule { }
