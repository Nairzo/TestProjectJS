import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map} from 'rxjs/operators';
import { ProductInterface } from '../models/producto.interface';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ProductDataService {
  
  producto!: Observable<any>;
  productos!: Observable<any>;
  url_api = "http://localhost:3000/api";

  public selectedProduct: ProductInterface = {
    id: "",
    nombre: "",
    descripcion: "",
    imagen: "",
    precio: 0,
    cantidad: 0,
  };

  constructor( private http: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-type": "application/json"
  });

  getAllProducts() {
    return this.http.get(`${this.url_api}/productos`);
  }

  getProductById(id: string) {
    return this.http.get(`${this.url_api}/productos/${id}`);
  }
  createProduct(producto: ProductInterface){
    return this.http.post<ProductInterface>(`${this.url_api}/productos/`, producto, {headers: this.headers}).pipe(map(data => data));
  }
  /*updateProduct(producto: ProductInterface){
    return this.http.put<ProductInterface>(`${this.url_api}/productos/`, producto, {headers: this.headers}).pipe(map(data => data));
  }*/
  updateProduct(id: string|undefined, updatedGame: ProductInterface): Observable<ProductInterface>{
    return this.http.put(`${this.url_api}/productos/`, updatedGame, {headers: this.headers}).pipe(map(data => data));

  }
  deleteProduct(id: string){
    return this.http.delete<ProductInterface>(`${this.url_api}/productos/${id}`, {headers: this.headers}).pipe(map(data => data));
  }

}
