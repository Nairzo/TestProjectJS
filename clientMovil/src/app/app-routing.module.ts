import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'productos',
    children: [
      {
        path: "",
        loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: ":productoId",
        loadChildren: () => import('./productos/producto/producto.module').then(m => m.ProductoPageModule)
      }
    ]
  },
  {
    path: 'ordenes',
    children: [
      {
        path: '',
        loadChildren: () => import('../app/ordenes/ordenes.module').then(m => m.OrdenesPageModule)
      },
      {
        path: ':ordenId',
        loadChildren: () => import('../app/ordenes/ordenes-detalles/ordenes-detalles.module').then(m => m.OrdenesDetallesPageModule)
      }
    ]
  },
  {
    path: '',
    loadChildren: () => import('../app/menu/menu.module').then(m => m.MenuPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
