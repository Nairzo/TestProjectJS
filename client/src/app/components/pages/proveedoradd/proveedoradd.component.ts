import { Component, OnInit } from '@angular/core';
import { ProviderDataService } from '../../../services/provider-data.service';
import { ProviderInterface } from '../../../models/proveedor.interface';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proveedoradd',
  templateUrl: './proveedoradd.component.html',
  styleUrls: ['./proveedoradd.component.css']
})
export class ProveedoraddComponent implements OnInit {

  public selectedProvider: ProviderInterface = {
    nombre: "",
    estado: "",
    telefono: 0,
    rfc: "",
    imagen: "",
    id: ""
  };

  edit: boolean = false;

  constructor(private dataApi: ProviderDataService, private location: Location, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.dataApi.getProviderById(params.id)
        .subscribe(res => {
          this.selectedProvider = res;
          this.edit = true;
        }, err => { console.log(err) });
    }
  }

  onSaveProvider(providerForm: NgForm) {
    this.dataApi.createProvider(providerForm.value).subscribe(proveedor => this.location.back())
  }
  onUpdateProvider(providerForm: NgForm) {
    this.dataApi.updateProvider(this.selectedProvider.id, this.selectedProvider).subscribe(proveedor => this.location.back())
  }

}
