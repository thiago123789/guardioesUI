import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './starter/home/home.component';
import { LoginComponent } from './account/login/login.component';
import { AccountModule } from './account/account.module';
import { AppModule } from './app.module';
import { CartComponent } from './account/cart/cart.component';
import { ViewCompraComponent } from './realizar-compra/view-compra/view-compra.component';

const routes: Routes = [
    {
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full'},
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
        path: '',
        children: [
            {
                path: 'compra',
                loadChildren: 'app/realizar-compra/realizar-compra.module#RealizarCompraModule'
            },
            {
                path: 'loja',
                loadChildren: 'app/gerenciamento-loja/gerenciamento-loja.module#GerenciamentoLojaModule'
            }
        ]
    }
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
