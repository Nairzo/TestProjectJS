import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map} from 'rxjs/operators';
import { ProductInterface } from '../models/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProviderDataService {

  url_api = "http://localhost:3000/api";
  

  constructor() { }
}
