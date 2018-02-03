import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [
    LoginComponent, 
    CartComponent
  ],
  exports: [
    LoginComponent,
    CartComponent
  ]
})
export class AccountModule { }
