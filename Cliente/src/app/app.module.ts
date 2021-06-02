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
import { ProductoComponent } from './components/pages/producto/producto.component';
import { ProveedorComponent } from './components/pages/proveedor/proveedor.component';
import { ProductoeditComponent } from './components/pages/productoedit/productoedit.component';
import { ProductoaddComponent } from './components/pages/productoadd/productoadd.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    ProveedoresComponent,
    InventarioComponent,
    MenuComponent,
    ProductoComponent,
    ProveedorComponent,
    ProductoeditComponent,
    ProductoaddComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
