import { Negocio } from '../Negocio/negocio';

export class Producto {
    idProducto: number;
    nombre: string;
    precio: number;
    categoria: string;
    descripcion: string;
    stock: number;
    disponibilidad: boolean;
    imagen: string;
    idNegocio: number;
    Negocio: Negocio;
}
