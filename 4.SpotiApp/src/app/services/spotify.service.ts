import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // importamos para poder usar el módulo http y solicitar info a la api de una web o servicio
import 'rxjs/add/operator/map'; // esto nos permite utilizar el método map()

@Injectable()
export class SpotifyService {

  artistas:any [] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";

  constructor( private http:Http ) {
    // como parámetros del constructor se declaran los módulo que usaremos, con su alias
  }

  getArtistas( termino:string ) {

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    // el método map() recorre un array y aplica la función declarada a cada elemento
    return this.http.get( url )
                .map( res => {
                  this.artistas = res.json().artists.items; // json() ayuda a darle formato al response
                  console.log(this.artistas);

                  return res.json().artists.items; // este return lo recibirá el search component quien está usando el servicio
                })

  }

}
