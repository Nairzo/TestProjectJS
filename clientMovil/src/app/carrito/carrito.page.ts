import { Component, OnInit } from '@angular/core';
import { ordenInterface } from '../models/orden.interface';
import { CartDataService } from '../services/car-data.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  providers: [CartDataService]
})
export class CarritoPage implements OnInit {

  orden: ordenInterface = this.carData.orden;

  constructor(private carData: CartDataService) { }

  ngOnInit() {
  }

}
