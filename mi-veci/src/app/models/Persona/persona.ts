import { Direccion } from '../Direccion/direccion';

export class Persona {
    idPersona: number;
    nombres: string;
    apellidos: string;
    cedula: string;
    celular: string;
    direccion: Direccion;
    correo: string;
    password: string;
    rol = 'C';
    idDireccion: number;
}
