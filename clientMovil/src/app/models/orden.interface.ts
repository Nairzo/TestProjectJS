import { PedidoInterface } from "./pedido.interface";

export interface ordenInterface {
    id?: string;
    productos?: PedidoInterface[];
    total?: number;
    fecha?: Date;
}