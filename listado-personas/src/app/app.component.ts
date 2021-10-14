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


  public personaAgregada(persona:Persona){
    this.personas.push(persona)
  }

}
