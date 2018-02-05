import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealizarCompraRoutingModule } from './realizar-compra-routing.module';
import { ListarPratosComponent } from './listar-pratos/listar-pratos.component';
import { ListarPorcoesComponent } from './listar-porcoes/listar-porcoes.component';
import { InfoLojaComponent } from './info-loja/info-loja.component';
import { ViewCompraComponent } from './view-compra/view-compra.component';
import { AccountModule } from '../account/account.module';
import { RouterModule } from '@angular/router/src/router_module';

@NgModule({
  imports: [
    CommonModule,
    RealizarCompraRoutingModule,
    AccountModule
  ],
  declarations: [
    ListarPratosComponent,
    ListarPorcoesComponent,
    InfoLojaComponent,
    ViewCompraComponent
  ]
})
export class RealizarCompraModule { }
