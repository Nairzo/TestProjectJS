import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ordenInterface } from 'src/app/models/orden.interface';
import { ProductInterface } from 'src/app/models/producto.interface';
import { CartDataService } from 'src/app/services/car-data.service';
import { ProductDataService } from 'src/app/services/product-data.service';

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
  orden: ordenInterface = this.carritoApi.orden;

  constructor(private route: ActivatedRoute, private productoApi: ProductDataService, private carritoApi: CartDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get("productoId")
      this.productoApi.getProductById(recipeId).subscribe(producto => (this.producto = producto))
    })
  }

  addToCar() {
    this.carritoApi.addProduct(this.producto);
  }

}
