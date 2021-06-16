import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoInterface } from 'src/app/models/carrito.interface';
import { ordenInterface } from 'src/app/models/orden.interface';
import { ProductInterface } from 'src/app/models/producto.interface';
import { CartDataService } from 'src/app/services/cart-data.service';
import { ProductDataService } from 'src/app/services/product-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
  providers: [ProductDataService],
})
export class ProductoPage implements OnInit {

  private producto: ProductInterface = {
    nombre: '',
    descripcion: '',
    imagen: '',
    precio: 0,
    cantidad: 0,
    proveedor: ''
  };
  
  private carrito: CarritoInterface = {
    productoId: "",
    productoNombre: "",
    productoImagen: "",
    precio: 0,
    cantidad: 1
  }

  constructor(private route: ActivatedRoute, private productoApi: ProductDataService, private cartApi: CartDataService, private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get("productoId")
      this.productoApi.getProductById(recipeId).subscribe(producto => (this.producto = producto))
    })
    this.getListItems();
  }

  getListItems() {
    this.cartApi.getAllItems().subscribe((carritos: CarritoInterface) => (this.carrito = carritos));
  }

  addToCar() {
    this.cartApi.agregarItem(this.carrito, this.producto);
    window.location.reload();
  }

}
