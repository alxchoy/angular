import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe:any = {}

  constructor( private activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) {

    // el ActivatedRoute sirve para enviar parámetros en la url y es necesario "subscribirse" para ser notificado de los parámetros
    // en este caso el parámetro de heroe viene siendo el id que le sigue luego del "/"

    // se usa el módulo de servicios (heroes.service) para obtener los heroes y posteriormente el index para pasarlo como param
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe( params['id'] );
      console.log(this.heroe);
    });
  }

}
