import { ProductInterface} from "../models/producto.interface";

export interface PedidoInterface {
    producto?: ProductInterface;
    cantidad?: number;

}