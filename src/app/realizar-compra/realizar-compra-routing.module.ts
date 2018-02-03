import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from '../account/cart/cart.component';
import { SelecionarItensComponent } from './selecionar-itens/selecionar-itens.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealizarCompraRoutingModule { }
