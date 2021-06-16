import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrderDataService } from 'src/app/services/order-data.service';
import { ordenInterface } from 'src/app/models/orden.interface';
import { CarritoInterface } from 'src/app/models/carrito.interface';

@Component({
  selector: 'app-ordenes-detalles',
  templateUrl: './ordenes-detalles.page.html',
  styleUrls: ['./ordenes-detalles.page.scss'],
})
export class OrdenesDetallesPage implements OnInit {

  private orden: ordenInterface = {
    id: "",
    productos: <CarritoInterface>[],
    total: 0,
    fecha: new Date,
  }

  constructor(private route: ActivatedRoute, private orderApi: OrderDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get("ordenId")
      this.orderApi.getOrderById(recipeId).subscribe(orden => (this.orden = orden))
    })
  }

}
