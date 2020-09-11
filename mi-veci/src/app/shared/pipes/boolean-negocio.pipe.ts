import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanNegocio'
})

export class BooleanNegocioPipe implements PipeTransform {

  transform(value: boolean, tipo: string): string {
    // tslint:disable-next-line: triple-equals
    switch(tipo){
      case 'Estado':
      {
        if (value){
          return 'Abierto';
        }
        else{
          return 'Cerrado';
        }
      }
      case 'Delivery':
      {
        if (value){
          return 'Disponible';
        }
        else{
          return 'No Disponible';
        }
      }
      case 'Reserva':
      {
        if (value){
          return 'Disponible';
        }
        else{
          return 'No Disponible';
        }
      }
    }
  }

}
