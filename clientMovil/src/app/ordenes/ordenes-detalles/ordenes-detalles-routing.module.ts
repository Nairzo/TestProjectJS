import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenesDetallesPage } from './ordenes-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenesDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenesDetallesPageRoutingModule {}
