import { LoggingService } from './LoggingService.service';
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

  constructor(private LoggingService:LoggingService){}

  public personaAgregada(persona:Persona){
    this.LoggingService.enviarMensajeConsola("Agregamos al arreglo la nueva persona: "+persona.nombre)
    this.personas.push(persona)
  }

}
