import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './starter/home/home.component';
import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app.routing';
import { ListagemLojasComponent } from './share/listagem-lojas/listagem-lojas.component';
import { LojaItemListaComponent } from './share/loja-item-lista/loja-item-lista.component';
import { RealizarCompraRoutingModule } from './realizar-compra/realizar-compra-routing.module';
import { RealizarCompraModule } from './realizar-compra/realizar-compra.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListagemLojasComponent,
    LojaItemListaComponent
  ],
  imports: [
    BrowserModule,
    AccountModule,
    AppRoutingModule,
    RealizarCompraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
