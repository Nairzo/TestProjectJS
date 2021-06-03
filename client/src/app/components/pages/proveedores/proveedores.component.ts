import { Component, OnInit } from '@angular/core';
import { ProviderDataService } from 'src/app/services/provider-data.service';
import { ProviderInterface } from '../../../models/proveedor.interface';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor(private dataApi: ProviderDataService) { }
  private proveedores!: ProviderInterface;

  ngOnInit() {
    this.getListProviders()
  }
  getListProviders() {
    this.dataApi.getAllProviders().subscribe((proveedores: ProviderInterface) => (this.proveedores = proveedores));
  }

}
