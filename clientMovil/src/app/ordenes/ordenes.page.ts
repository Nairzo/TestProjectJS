import { Component, OnInit } from '@angular/core';
import { ordenInterface } from '../models/orden.interface';
import { OrderDataService } from '../services/order-data.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.page.html',
  styleUrls: ['./ordenes.page.scss'],
})
export class OrdenesPage implements OnInit {

  private ordenes: ordenInterface;

  constructor( private orderApi: OrderDataService) { }


  ngOnInit() {
    this.getListOrders();
  }

  getListOrders() {
    this.orderApi.getAllOrders().subscribe((ordenes: ordenInterface) => (this.ordenes = ordenes));
  }

}
