import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map} from 'rxjs/operators';
import { InventoryInterface } from '../models/inventario.interface';

@Injectable({
  providedIn: 'root'
})
export class InventoryDataService {

  url_api = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-type": "application/json"
  });

  getAllInventory() {
    return this.http.get(`${this.url_api}/inventarios`);
  }
  createInventory(inventario: InventoryInterface){
    return this.http.post<InventoryInterface>(`${this.url_api}/inventarios/`, inventario, {headers: this.headers}).pipe(map(data => data));
  }
}
