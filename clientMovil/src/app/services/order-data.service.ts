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
export class OrderDataService {

  url_api = "http://localhost:3000/api";

  constructor(private http: HttpClient, private location: Location) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-type": "application/json"
  });

  getAllOrders() {
    return this.http.get(`${this.url_api}/ordenes`);
  }

  getOrderById(id: string) {
    return this.http.get(`${this.url_api}/ordenes/${id}`);
  }

  createOrder(orden: ordenInterface) {
    return this.http.post<ordenInterface>(`${this.url_api}/ordenes/`, orden, { headers: this.headers }).pipe(map(data => data));
  }
}
