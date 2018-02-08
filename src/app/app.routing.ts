import { Routes } from '@angular/router';

import { UserComponent }   from './user/user.component';
import { CartComponent } from 'app/account/cart/cart.component';
import { CriarPorcaoPratoComponent } from 'app/gerenciamento-loja/criar-porcao-prato/criar-porcao-prato.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: 'app/account/account.module#AccountModule'
    },
    {
        path: '',
        children: [
            {
                path: 'home',
                loadChildren: 'app/starter/starter.module#StarterModule'
            },
            {
                path: 'user',
                component: UserComponent
            },
            {
                path: 'lojas',
                loadChildren:  'app/gerenciamento-loja/gerenciamento-loja.module#GerenciamentoLojaModule'
            },
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: 'compra',
                loadChildren: 'app/realizar-compra/realizar-compra.module#RealizarCompraModule'
            }
        ]
    }
]
