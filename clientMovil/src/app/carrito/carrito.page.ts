import { Component, OnInit } from '@angular/core';
import { CarritoInterface } from '../models/carrito.interface';
import { CartDataService } from '../services/cart-data.service';
import { Location } from '@angular/common';
import { OrderDataService } from '../services/order-data.service';
import { ordenInterface } from '../models/orden.interface';
import { AlertController } from '@ionic/angular';
import { ProductInterface } from '../models/producto.interface';
import { ProductDataService } from '../services/product-data.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  providers: [CartDataService, ProductDataService]
})
export class CarritoPage implements OnInit {

  constructor(
    private cartApi: CartDataService,
    private location: Location,
    private ordenApi: OrderDataService,
    public alertController: AlertController,
    private productApi: ProductDataService) { }

  carrito: CarritoInterface;
  productos: ProductInterface;
  orden: ordenInterface;
  contador: any = {
    count: 0,
  };
  selectProduct: ProductInterface = {
    cantidad: 0,
  }

  public selectedItem: CarritoInterface = {
    cantidad: 0
  };

  ngOnInit() {
    this.getListItems();
    this.getCountItems();
    this.getAllProducts();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Espera',
      subHeader: 'Aún no hay articulos en tu carrito',
      message: 'Vuelve a los productos y agrega algunos',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    /*console.log('onDidDismiss resolved with role', role);*/
  }

  getListItems() {
    this.cartApi.getAllItems().subscribe((carritos: CarritoInterface) => (this.carrito = carritos));
  }

  getAllProducts() {
    this.productApi.getAllProducts().subscribe((productos: CarritoInterface) => (this.productos = productos));
  }

  getCountItems() {
    this.cartApi.countItems().subscribe((contador) => (this.contador = contador));
  }

  getCantidad(id: string) {
    this.cartApi.getItemtById(id).subscribe(carrito => (this.carrito = carrito));
  }

  updateCantidadItem(id: string, selectedItem: CarritoInterface) {
    this.cartApi.updateCantidad(id, selectedItem).subscribe(item => this.location.forward());
  }

  eliminarItem(id: string) {
    if (confirm("¿Estas seguro de eliminar este producto?")) {
      this.cartApi.deleteItem(id).subscribe();
      window.location.reload();
    }
  }

  incrementarCantidad(id: string, cant: number) {
    this.selectedItem.cantidad = cant;
    this.selectedItem.cantidad = this.selectedItem.cantidad + 1;
    this.updateCantidadItem(id, this.selectedItem);
    window.location.reload(true);
  }

  disminuirCantidad(id: string, cant: number) {
    this.selectedItem.cantidad = cant;
    this.selectedItem.cantidad = this.selectedItem.cantidad - 1;
    if (this.selectedItem.cantidad === 0) {
      this.cartApi.deleteItem(id).subscribe();
    } else {
      this.updateCantidadItem(id, this.selectedItem);
    }
    window.location.reload(true);
  }

  updateCantidadProducto(id: string, selectedProduct: ProductInterface) {
    this.productApi.updateCantidad(id, selectedProduct).subscribe(producto => this.location.forward());
  }

  actualizarStock(carrito: CarritoInterface, productos: ProductInterface) {
    for (let i in carrito) {
      for (let j in productos) {
        if (carrito[i].productoId === productos[j].id) {
          this.selectProduct.cantidad = productos[j].cantidad - carrito[i].cantidad;
          this.updateCantidadProducto(productos[j].id, this.selectProduct);
        }
      }
    }
  }


  crearOrden() {
    if (this.contador.count === 0) {
      this.presentAlert();
    } else {
      this.orden = {
        productos: this.carrito,
        fecha: new Date,
        total: this.cartApi.calcularTotal(this.carrito),
      }
      this.actualizarStock(this.carrito, this.productos);
      this.ordenApi.createOrder(this.orden).subscribe(orden => this.location.back());
      this.cartApi.vaciarCarrito(this.carrito);
    }

  }
}
