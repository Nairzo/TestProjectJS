import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
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
    path: 'producto',
    loadChildren: () => import('./productos/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
