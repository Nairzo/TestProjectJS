import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenesDetallesPageRoutingModule } from './ordenes-detalles-routing.module';

import { OrdenesDetallesPage } from './ordenes-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenesDetallesPageRoutingModule
  ],
  declarations: [OrdenesDetallesPage]
})
export class OrdenesDetallesPageModule {}
