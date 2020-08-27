import { Producto } from '../Producto/producto';

export class Detalle {
    idDetalle: number;
    idProducto: number;
    idLista: number;
    cantidad: number;
    total: number;
    Producto:Producto;
}
