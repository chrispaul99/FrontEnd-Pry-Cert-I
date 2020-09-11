import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(item: any): string {
    if(!item){
      console.log('No imagen');
      return 'assets/img/noimage.png';
    }
    else{
      if (!item.imagen){
        console.log('No imagen');
        return 'assets/img/noimage.png';
      }
      if (item.imagen.length > 0){
        return item.imagen;
      }
      else {
        console.log(item.imagen);
        console.log('No tama;o');
        return 'assets/img/noimage.png';
      }
    }
   
  }

}
