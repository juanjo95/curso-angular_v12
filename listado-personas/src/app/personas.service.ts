import { Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{

  personas:Persona[] = [new Persona("Juan","Salgado"),new Persona("Carlos","Perez")]


  constructor(private loggingService: LoggingService){}

  public agregarPersona(persona:Persona){
    this.loggingService.enviarMensajeConsola("Agregamos persona: "+persona.nombre)
    this.personas.push(persona)
  }

}
