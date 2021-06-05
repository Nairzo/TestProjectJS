import { Component, OnInit } from '@angular/core';
import { InventoryDataService } from 'src/app/services/inventory-data.service';
import { InventoryInterface } from '../../../models/inventario.interface';
import { ProductDataService } from 'src/app/services/product-data.service';
import { ProductInterface } from '../../../models/producto.interface';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-inventarioadd',
  templateUrl: './inventarioadd.component.html',
  styleUrls: ['./inventarioadd.component.css']
})
export class InventarioaddComponent implements OnInit {
  public f = new Date();

  public selectedInventory: InventoryInterface = {
    fecha: this.f,
    movimiento: "",
    cantidad: 0,
    producto: "",
    id: ""
  };
  public selectedProduct: ProductInterface = {
    cantidad: 0
  };

  constructor(private location: Location, private productoApi: ProductDataService, private inventarioApi: InventoryDataService) { }
  private productos!: ProductInterface;

  ngOnInit() {
    this.getListProducts();
  }

  getListProducts() {
    this.productoApi.getAllProducts().subscribe((productos: ProductInterface) => (this.productos = productos));
  }

  onSaveInventory(inventoryForm: NgForm) {
    this.inventarioApi.createInventory(inventoryForm.value).subscribe(inventario => this.location.back());
  }
  updateCantidadProducto(id: string, cantidadForm: NgForm) {
    this.productoApi.updateCantidad(id, cantidadForm.value).subscribe(producto => this.location.back());
  }
  newInventory(inf: NgForm, id: string, cnt: NgForm) {
    this.onSaveInventory(inf);
    this.updateCantidadProducto(id, cnt);
  }

}
