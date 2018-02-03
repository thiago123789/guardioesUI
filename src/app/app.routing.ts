import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './starter/home/home.component';
import { LoginComponent } from './account/login/login.component';
import { AccountModule } from './account/account.module';
import { AppModule } from './app.module';
import { CartComponent } from './account/cart/cart.component';
import { SelecionarItensComponent } from './realizar-compra/selecionar-itens/selecionar-itens.component';
import { ViewCompraComponent } from './realizar-compra/view-compra/view-compra.component';

const routes: Routes = [
    {
        path: 'home',
        children: [
            {
                path: '',
                component: HomeComponent
            }    
        ]
    },
    {
        path: 'compra/:idLoja',
        children: [
            {
                path: '',
                component: ViewCompraComponent
            }
        ]
    },   
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes, 
            { enableTracing: true }
        )
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
