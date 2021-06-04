import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {app_routing} from '../app/app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { ProveedoresComponent } from './components/pages/proveedores/proveedores.component';
import { InventarioComponent } from './components/pages/inventario/inventario.component';
import { from, Observable } from 'rxjs';
import { MenuComponent } from './components/menu/menu.component';
import { ProductoComponent } from './components/pages/producto/producto.component';
import { ProveedorComponent } from './components/pages/proveedor/proveedor.component';
import { ProductoaddComponent } from './components/pages/productoadd/productoadd.component';
import { HttpClientModule } from '@angular/common/http';


//Servicios
import { ProductDataService } from './services/product-data.service';
import { ProviderDataService } from './services/provider-data.service';
import { ProveedoraddComponent } from './components/pages/proveedoradd/proveedoradd.component';


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
    ProductoaddComponent,
    ProveedoraddComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductDataService,
    ProviderDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
