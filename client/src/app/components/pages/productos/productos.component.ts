import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';
import { ProductInterface } from '../../../models/producto.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private dataApi: ProductDataService) { }
  private productos!: ProductInterface;

  ngOnInit() {
    this.getListProducts();
  }
  getListProducts() {
    this.dataApi.getAllProducts().subscribe((productos: ProductInterface) => (this.productos = productos));
  }

}
