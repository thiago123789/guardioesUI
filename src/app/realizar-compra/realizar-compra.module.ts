import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealizarCompraRoutingModule } from './realizar-compra-routing.module';
import { ListarPratosComponent } from './listar-pratos/listar-pratos.component';
import { ListarPorcoesComponent } from './listar-porcoes/listar-porcoes.component';
import { InfoLojaComponent } from './info-loja/info-loja.component';
import { ViewCompraComponent } from './view-compra/view-compra.component';
import { AccountModule } from '../account/account.module';
import { RouterModule } from '@angular/router';
import { RealizarCompraService } from './realizar-compra.service';
import { HttpClientModule } from '@angular/common/http';
import { CriarMeuPratoComponent } from './criar-meu-prato/criar-meu-prato.component';
import { ListaPorcoesPratoComponent } from './lista-porcoes-prato/lista-porcoes-prato.component';

@NgModule({
  imports: [
    CommonModule,
    RealizarCompraRoutingModule,
    AccountModule,
    HttpClientModule
  ],
  declarations: [
    ListarPratosComponent,
    ListarPorcoesComponent,
    InfoLojaComponent,
    ViewCompraComponent,
    CriarMeuPratoComponent,
    ListaPorcoesPratoComponent
  ],
  providers: [RealizarCompraService]
})
export class RealizarCompraModule { }
