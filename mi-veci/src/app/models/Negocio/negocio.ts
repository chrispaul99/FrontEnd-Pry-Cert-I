import { Comerciante } from '../Comerciante/comerciante';
import { Direccion } from '../Direccion/direccion';
import { Producto } from '../Producto/producto';
export class Negocio {
    idNegocio: number;
    nombre: string;
    categoria: string;
    descripcion: string;
    imagen: string;
    horarioInicial: string;
    horarioFinal: string;
    delivery: boolean;
    reserva: boolean;
    idDireccion: number;
    idComerciante: number;
    Comerciante: Comerciante = new Comerciante();
    Direccion: Direccion = new Direccion();
    Producto : Array<Producto> = [];
}
