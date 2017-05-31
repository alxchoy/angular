import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, active: boolean = true): any {
    var clave: string = "";
    var key: string = "";

    if (active) {
      for (var i = 0; i < value.length; i++) {
        key = value[i];
        key = key.replace(key, '*');

        clave += key;
      }
    } else {
      clave = value;
    }


    return clave;
  }

}
