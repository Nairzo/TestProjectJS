import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {app_routing} from '../app/app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { ProveedoresComponent } from './components/pages/proveedores/proveedores.component';
import { InventarioComponent } from './components/pages/inventario/inventario.component';
import { from } from 'rxjs';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    ProveedoresComponent,
    InventarioComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
