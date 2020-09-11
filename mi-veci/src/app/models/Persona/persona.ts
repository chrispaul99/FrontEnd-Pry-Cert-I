import { Direccion } from '../Direccion/direccion';

export class Persona {
    idPersona: number;
    nombres: string;
    apellidos: string;
    cedula: string;
    celular: string;
    Direccion: Direccion = new Direccion();
    correo: string;
    password: string;
    rol = 'C';
    idDireccion: number;
}
export class Login{
    correo: string;
    password: string;
}
