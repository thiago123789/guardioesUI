import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from 'app/account/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [
    CartComponent,
    LoginComponent
  ],
  exports: [
    CartComponent,
    LoginComponent
  ]
})
export class AccountModule { }
