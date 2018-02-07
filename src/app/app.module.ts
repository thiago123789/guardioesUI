import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { NguiMapModule} from '@ngui/map';

import { UserComponent }   from './user/user.component';
import { RealizarCompraService } from 'app/realizar-compra/realizar-compra.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountModule } from 'app/account/account.module';
import { ListarPorcoesPratoComponent } from 'app/realizar-compra/listar-porcoes-prato/listar-porcoes-prato.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    AccountModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  providers: [RealizarCompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
