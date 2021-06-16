import { Injectable } from '@angular/core';
import { ordenInterface } from '../models/orden.interface';
import { CarritoInterface } from '../models/carrito.interface';
import { ProductInterface } from '../models/producto.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  url_api = "http://localhost:3000/api";

  carrito: CarritoInterface;
  cart: CarritoInterface;
  cartCant: CarritoInterface = {
    cantidad: 0,
  };


  constructor(private http: HttpClient, private location: Location) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-type": "application/json"
  });

  getAllItems() {
    return this.http.get(`${this.url_api}/carritos`);
  }

  getItemtById(id: string) {
    return this.http.get(`${this.url_api}/carritos/${id}`);
  }

  updateCantidad(id: string, carrito: CarritoInterface) {
    return this.http.patch(`${this.url_api}/carritos/${id}`, carrito).pipe(map(data => data));
  }

  deleteItem(id: string) {
    return this.http.delete<CarritoInterface>(`${this.url_api}/carritos/${id}`, { headers: this.headers }).pipe(map(data => data));
  }

  vaciarCarrito(carrito: CarritoInterface) {
    for (let i in carrito) {
      this.deleteItem(carrito[i].id).subscribe();
    }
  }

  countItems() {
    return this.http.get(`${this.url_api}/carritos/count`);
  }

  createItem(carrito: CarritoInterface) {
    return this.http.put<CarritoInterface>(`${this.url_api}/carritos/`, carrito, { headers: this.headers }).pipe(map(data => data));
  }

  calcularTotal(carrito: CarritoInterface) {
    let total: number = 0;
    for (let i in carrito) {
      total = total + (carrito[i].cantidad * carrito[i].precio);
    }
    return total;
  }

  agregarItem(carrito: CarritoInterface, producto: ProductInterface) {

    let productoExiste = false;

    for (let i in carrito) {
      if (carrito[i].productoId === producto.id) {
        this.cartCant.cantidad = carrito[i].cantidad + 1;
        this.updateCantidad(carrito[i].id, this.cartCant).subscribe(producto => this.location.forward());
        productoExiste = true;
        break;
      }
    }
    if (!productoExiste) {
      this.cart = {
        productoId: producto.id,
        productoNombre: producto.nombre,
        productoImagen: producto.imagen,
        cantidad: 1,
        precio: producto.precio,

      }
      this.createItem(this.cart).subscribe(carrito => (this.carrito = carrito));
    }
    this.calcularTotal(carrito);
    console.log(carrito);

  }
}
