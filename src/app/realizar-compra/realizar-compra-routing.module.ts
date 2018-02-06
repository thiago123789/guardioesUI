import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from '../account/cart/cart.component';
import { ViewCompraComponent } from './view-compra/view-compra.component';
import { ListarPratosComponent } from './listar-pratos/listar-pratos.component';
import { ListarPorcoesComponent } from './listar-porcoes/listar-porcoes.component';
import { CriarMeuPratoComponent } from 'app/realizar-compra/criar-meu-prato/criar-meu-prato.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':idLoja',
        component: ViewCompraComponent,
        children: [
          {
            path: '',
            component: ListarPratosComponent
          },
          {
            path: 'criar-prato',
            component: CriarMeuPratoComponent,
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
export class RealizarCompraRoutingModule { }
