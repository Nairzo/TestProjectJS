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
  private producto: ProductInterface = {
    nombre: '',
    descripcion: '',
    imagen: '',
    precio: 0,
    cantidad: 0,
    proveedor: ''
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
    this.inventarioApi.createInventory(inventoryForm.value).subscribe(inventario => this.location.forward());
  }
  updateCantidadProducto(id: string, selectedProduct: ProductInterface) {
    this.productoApi.updateCantidad(id, selectedProduct).subscribe(producto => this.location.back());
  }
  getCantidad(id: string) {
    this.productoApi.getProductById(id).subscribe(producto => (this.producto = producto));
  }
  newInventory(inf: NgForm, id: string, cnt: number) {
    this.selectedProduct.cantidad = this.producto.cantidad;
    if (cnt == 1) {
      this.selectedProduct.cantidad = ((this.selectedProduct.cantidad ?? 0) + (this.selectedInventory.cantidad ?? 0));
    } else if(cnt == 0) {
      this.selectedProduct.cantidad = ((this.selectedProduct.cantidad ?? 0) - (this.selectedInventory.cantidad ?? 0));
    } else {
      
    }
    this.onSaveInventory(inf);
    this.updateCantidadProducto(id, this.selectedProduct);
    /*console.log(inf.value);
    console.log(this.selectedProduct.cantidad);
    console.log(this.producto.cantidad);*/
  }

}
