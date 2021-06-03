import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../../../services/product-data.service';
import { ActivatedRoute, Params} from '@angular/router';
import { ProductInterface } from '../../../models/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  
  constructor(route: ActivatedRoute, private dataApi: ProductDataService ) {
    const producto_id: string = route.snapshot.params["id"];
    this.getDetails(producto_id);
   }
  private producto: ProductInterface = {
    nombre: '',
    descripcion: '',
    imagen: '',
    precio: 0,
    cantidad: 0
  }

  ngOnInit() {
    
  }

  getDetails(id: string){
    this.dataApi.getProductById(id).subscribe(producto => (this.producto = producto))
  }

  onDelete(id: string){
    if(confirm("¿Estas seguro de eliminar este producto?")){
      this.dataApi.deleteProduct(id).subscribe();
    }
  }
  onPreUpdateProduct(id: string) {
    console.log(id);
  }

}
