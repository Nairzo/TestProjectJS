import { RouterModule, Routes} from "@angular/router";
import { ProductosComponent } from "../app/components/pages/productos/productos.component";
import { ProveedoresComponent } from "../app/components/pages/proveedores/proveedores.component";
import { ProveedorComponent } from "../app/components/pages/proveedor/proveedor.component";
import { InventarioComponent } from "../app/components/pages/inventario/inventario.component";
import { ProductoComponent } from "../app/components/pages/producto/producto.component";

const app_routes: Routes = [
    { path: "productos", component: ProductosComponent},
    { path: "proveedores", component: ProveedoresComponent},
    { path: "proveedor", component: ProveedorComponent},
    { path: "inventario", component: InventarioComponent},
    { path: "producto/:id", component: ProductoComponent},
    {path: "**", pathMatch: "full", redirectTo: "productos"}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});