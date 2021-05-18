import { Component } from '@angular/core';

@Component({
    selector: 'contador-componente',
    template: `
        <h1>{{ titulo }}</h1>
        
        <h1>La base es: <strong>{{ base }}</strong></h1>
        <br><br>
        
        <button (click)=' sumar(); '>+1</button>
        <span>{{ numero }}</span>
        <button (click)=' numero = numero - 1; '>-1</button>
        
        <br><br>
        <button (click)='acumular(base)'>Acumular</button>
    `
})
export class ContadorComponent {
    public titulo : string = 'Aplicación de contador';
    public numero : number = 0;
    public base : number = 5;
  
    sumar = () => { this.numero += 1; };
  
    acumular = (valor : number) => this.numero += valor;
}