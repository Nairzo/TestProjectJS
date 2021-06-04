import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryDataService {

  url_api = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  getAllInventory() {
    return this.http.get(`${this.url_api}/inventarios`);
  }
}
