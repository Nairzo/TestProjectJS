import { Injectable } from '@angular/core';
import { ordenInterface } from '../models/orden.interface';
import { PedidoInterface } from '../models/pedido.interface';
import { ProductInterface } from '../models/producto.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  url_api = "http://localhost:3000/api";

  orden: ordenInterface = {
    productos: [],
    total: 0,
    fecha: new Date,
  };
  pedido: PedidoInterface = {
    producto: {
      id: '',
      nombre: '',
      descripcion: '',
      imagen: '',
      precio: 0,
      cantidad: 0,
      proveedor: '',
    },
    cantidad: null,

  };

  order: ordenInterface = {
    id: '',
    productos: [
      {
        cantidad: null,
        producto: {
          id: '',
          nombre: '',
          descripcion: '',
          imagen: '',
          precio: 0,
          cantidad: 0,
          proveedor: '',
        }
      }
    ],
    total: null,
    fecha: new Date,
  };

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-type": "application/json"
  });


  updateCar(order: ordenInterface): Observable<ordenInterface> {
    return this.http.put(`${this.url_api}/ordenes/`, order, { headers: this.headers }).pipe(map(data => data));
  }

  addProduct(producto: ProductInterface) {
    const item = this.orden.productos.find(pedido => { return (pedido.producto.id === producto.id) });
    if (item !== undefined) {
      item.cantidad++;
    } else {
      const add: PedidoInterface = {
        cantidad: 1,
        producto,
      };
      this.orden.productos.push(add);
    }
    this.updateCar(this.orden).subscribe((orden => (this.orden = orden)));
    console.log(item);
    console.log(this.orden);

  }

  removeProduct(producto: ProductInterface) {

  }

  realizarOrden() {

  }

  clearCart() {

  }
}
