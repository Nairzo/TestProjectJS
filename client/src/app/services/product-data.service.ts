import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ProductDataService {
  
  producto!: Observable<any>;
  productos!: Observable<any>;
  url_api = "http://localhost:3000/api";

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
  createProduct(producto: any){
    return this.http.post(`${this.url_api}/productos/`, producto, {headers: this.headers}).pipe(map(data => data));
  }
  updateProduct(producto: any){
    return this.http.put(`${this.url_api}/productos/`, producto, {headers: this.headers}).pipe(map(data => data));
  }
  deleteProduct(id: string){
    return this.http.delete(`${this.url_api}/productos/`, {headers: this.headers}).pipe(map(data => data));
  }

}
