import { Persona } from './persona.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de personas'


  /* Declaramos un arreglo de tipo Persona (persona.model.ts) */
  personas:Persona[] = [new Persona("Juan","Salgado"),new Persona("Carlos","Perez")]

  nombreInput!:string
  apellidoInput!:string

  public agregarPersona():void{

    let persona1 = new Persona(this.nombreInput,this.apellidoInput)
    this.personas.push(persona1)


  }

}
