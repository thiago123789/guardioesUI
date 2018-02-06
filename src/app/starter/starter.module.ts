import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarterRoutingModule } from './starter-routing.module';
import { HomeComponent } from 'app/starter/home/home.component';
import { ListagemLojasComponent } from 'app/shared/listagem-lojas/listagem-lojas.component';
import { AccountModule } from 'app/account/account.module';


@NgModule({
  imports: [
    CommonModule,
    StarterRoutingModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    ListagemLojasComponent
  ]
})
export class StarterModule { }
