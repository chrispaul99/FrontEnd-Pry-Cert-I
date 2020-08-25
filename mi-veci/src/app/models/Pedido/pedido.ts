import { FormaPago } from '../FormaPago/forma-pago';
import { Lista } from '../Lista/lista';
import { Persona } from '../Persona/persona';
export class Pedido {
    idPedido: number;
    fecha: Date;
    documento: string;
    idCliente: number;
    idFormaPago: number;
    tiempoOrder:string;
    estado:string;
    idLista:number;
    FormaPago:FormaPago = new FormaPago();
    Persona: Persona;
    Lista:Lista = new Lista();
}
