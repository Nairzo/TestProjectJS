import { Component, OnInit } from '@angular/core';
import { ProviderDataService } from '../../../services/provider-data.service';
import { ActivatedRoute, Params} from '@angular/router';
import { ProviderInterface } from '../../../models/proveedor.interface';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  constructor(route: ActivatedRoute, private dataApi: ProviderDataService) { 
    const proveedor_id: string = route.snapshot.params["id"];
    this.getDetails(proveedor_id);
  }
  private proveedor: ProviderInterface = {
    nombre: '',
    estado: '',
    rfc: '',
    imagen: '',
    telefono: 0
  }

  ngOnInit() {
  }

  getDetails(id: string){
    this.dataApi.getProviderById(id).subscribe(proveedor => (this.proveedor = proveedor))
  }

  onDelete(id: string){
    if(confirm("¿Estas seguro de eliminar este proveedor?")){
      this.dataApi.deleteProvider(id).subscribe();
    }
  }

}
