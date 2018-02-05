import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from '../account/cart/cart.component';
import { ChildActivationEnd } from '@angular/router/src/events';
import { ViewCompraComponent } from './view-compra/view-compra.component';
import { ListarPratosComponent } from './listar-pratos/listar-pratos.component';
import { ListarPorcoesComponent } from './listar-porcoes/listar-porcoes.component';

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
            path: 'lista-porcoes',
            component: ListarPorcoesComponent,
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
