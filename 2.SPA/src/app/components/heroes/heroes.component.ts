import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
