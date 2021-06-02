import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private dataApi: ProductDataService) { }

  ngOnInit() {
    this.getListProducts();
  }
  getListProducts() {
    this.dataApi.getAllProducts().subscribe(products => console.log(products));
  }

}
