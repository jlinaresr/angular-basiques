import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 9000
  }

  // Lineas antes de utilizar el servicio
  // get personajes(): Personaje[] {
  //   return this.DbzService.personajes;
  // }
  // agregarNuevoPersonaje( nuevoPersonaje: Personaje ){
  //   this.personajes.push( nuevoPersonaje );
  // }

  constructor( private DbzService: DbzService){  }

}
