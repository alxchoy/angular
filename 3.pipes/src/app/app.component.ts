import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Alexander";
  nombre2 = "alexanDEr jorge chOy aRRoyo"
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  porcentaje = 0.234;
  salario = 1450.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "primera",
      casa: 19
    }
  }

  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('LLegó la data!'), 3500 );
  });

  fecha = new Date();

  video = "uTB_y0c0Tzg";

  apellido = "arroyo";
  activo = true;
}
