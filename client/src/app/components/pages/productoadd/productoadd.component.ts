import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../../services/product-data.service';
import { ProductInterface } from '../../../models/producto.interface';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productoadd',
  templateUrl: './productoadd.component.html',
  styleUrls: ['./productoadd.component.css']
})
export class ProductoaddComponent implements OnInit {

  public selectedProduct: ProductInterface = {
    id: "",
    nombre: "",
    descripcion: "",
    imagen: "",
    precio: 0,
    cantidad: 0,
  };

  edit: boolean = false;

  constructor(private dataApi: ProductDataService, private location: Location, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.dataApi.getProductById(params.id)
        .subscribe(res => {
          this.selectedProduct = res;
          this.edit = true;
        }, err => { console.log(err) });
    }

  }

  onSaveProduct(productForm: NgForm) {

    this.dataApi.createProduct(productForm.value).subscribe(producto => this.location.back())
  }
  onUpdateProduct(productForm: NgForm) {
    this.dataApi.updateProduct(this.selectedProduct.id, this.selectedProduct).subscribe(producto => this.location.back())
  }

}
