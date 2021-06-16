import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'productos',
        children: [
          {
            path: "",
            loadChildren: () => import('../productos/productos.module').then(m => m.ProductosPageModule)
          },
          {
            path: ":productoId",
            loadChildren: () => import('../productos/producto/producto.module').then(m => m.ProductoPageModule)
          }
        ]
      },
      {
        path: "carrito",
        loadChildren: () => import('../carrito/carrito.module').then(m => m.CarritoPageModule)
      },
      {
        path: "ordenes",
        loadChildren: () => import('../ordenes/ordenes.module').then(m => m.OrdenesPageModule)
      },
      {
        path: "",
        redirectTo: "/menu/productos",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/menu/productos",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
