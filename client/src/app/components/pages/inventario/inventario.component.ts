import { Component, OnInit } from '@angular/core';
import { InventoryDataService} from '../../../services/inventory-data.service';
import { InventoryInterface } from '../../../models/inventario.interface';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(private dataApi: InventoryDataService) { }
  private movimientos!: InventoryInterface;

  ngOnInit(): void {
  }

  getListInventory() {
    this.dataApi.getAllInventory().subscribe((movimientos: InventoryInterface) => (this.movimientos = movimientos));
  }

}
