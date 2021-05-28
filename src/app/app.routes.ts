import { RouterModule, Routes} from "@angular/router";
import { ProductosComponent } from "../app/components/pages/productos/productos.component";

const app_routes: Routes = [
    { path: "productos", component: ProductosComponent},
    {path: "**", pathMatch: "full", redirectTo: "productos"}
];

export const app_routing = RouterModule.forRoot(app_routes);