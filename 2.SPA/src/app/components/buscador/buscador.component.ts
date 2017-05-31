import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor( private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino']; // el termino será igual al parámetro que se ha recibido del navbar component
      
      // heroes es un array que contiene los nombres de los heroes que coincidieron con la búsqueda
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log(this.heroes);
    } )
  }

}
