import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  // se necesita manejar esta variable desde el html, es decir esta variable tomará el valor que se indique en el html, para ello se usa el ngModel
  // generalmente se usa en campos de entrada como un input para poder agregar el valor y establecerlo a la variable
  termino:string = "";

  constructor( private _spotifyService:SpotifyService ) { }

  ngOnInit() {

  }

  buscarArtista(){
    // console.log(this.termino);
    this._spotifyService.getArtistas(this.termino).
    subscribe(
      // en data se recibe el return del servicio spotify
    );
  }

}
