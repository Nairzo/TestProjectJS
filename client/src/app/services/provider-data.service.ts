import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map} from 'rxjs/operators';
import { ProviderInterface } from '../models/proveedor.interface';

@Injectable({
  providedIn: 'root'
})
export class ProviderDataService {

  proveedor!: Observable<any>;
  proveedores!: Observable<any>;
  url_api = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-type": "application/json"
  });

  getAllProviders() {
    return this.http.get(`${this.url_api}/productos`);
  }

  getProviderById(id: string) {
    return this.http.get(`${this.url_api}/productos/${id}`);
  }
  createProvider(producto: ProviderInterface){
    return this.http.post<ProviderInterface>(`${this.url_api}/productos/`, producto, {headers: this.headers}).pipe(map(data => data));
  }
  updateProvider(id: string|undefined, updatedGame: ProviderInterface): Observable<ProviderInterface>{
    return this.http.put(`${this.url_api}/productos/`, updatedGame, {headers: this.headers}).pipe(map(data => data));

  }
  deleteProvider(id: string){
    return this.http.delete<ProviderInterface>(`${this.url_api}/productos/${id}`, {headers: this.headers}).pipe(map(data => data));
  }

}
