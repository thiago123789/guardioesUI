import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';

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
                path: 'cart',
                component: TableComponent
            },
            {
                path: 'compra',
                loadChildren: 'app/realizar-compra/realizar-compra.module#RealizarCompraModule'
            }
        ]
    }
]
