import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoPedido'
})
export class EstadoPedidoPipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'I') {
      return 'Ingresado';
    }
    if (value === 'E') {
      return 'Entregado';
    }
    if (value === 'P') {
      return 'En Proceso';
    }
    if (value === 'L') {
      return 'Listo para Entregar';
    }
    if (value === 'V') {
      return 'Enviado';
    }
    if (value === 'C') {
      return 'Cancelado';
    }
  }
}
