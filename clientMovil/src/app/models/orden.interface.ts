import { CarritoInterface } from "./carrito.interface";

export interface ordenInterface {
    id?: string;
    productos?: CarritoInterface;
    total?: number;
    fecha?: Date;
}