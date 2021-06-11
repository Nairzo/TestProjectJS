import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../services/product-data.service';
import { ProductInterface } from '../models/producto.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  providers: [ProductDataService],
})
export class ProductosPage implements OnInit {

  constructor(private dataApi: ProductDataService) { }
  private productos!: ProductInterface;

  ngOnInit() {
    this.getListProducts();
  }
  getListProducts() {
    this.dataApi.getAllProducts().subscribe((productos: ProductInterface) => (this.productos = productos));
  }

}
