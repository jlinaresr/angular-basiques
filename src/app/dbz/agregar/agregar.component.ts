import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  // Evitar comportamiento por defecto manualmente
  // agregar( event: any ){
  //   event.preventDefault();
  //   console.log("he");
  // }

  @Input('nuevoAgregar') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

  constructor( private dbzService: DbzService ) { }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0) {   
      return; 
    }
    console.log( this.nuevo );
    // this.onNuevoPersonaje.emit( this.nuevo );
  
    this.dbzService.agregarNuevopersonaje( this.nuevo );

    this.nuevo = {
      nombre : '',
      poder  : 0
    };
  }

  // cambiarNombre( event: any){
  //   console.log( event.target.value )
  // }
}
