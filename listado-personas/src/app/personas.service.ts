import { DataServices } from './data.service';
import { EventEmitter, Injectable } from '@angular/core';

import { LoggingService } from './LoggingService.service';
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{

  personas:Persona[] = []

  saludar:EventEmitter<number> = new EventEmitter<number>()

  constructor(private loggingService: LoggingService,
              private dataServices: DataServices){}

  public setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  public obtenerPersonas(){
    return this.dataServices.cargarPersonas()
  }

  public agregarPersona(persona:Persona){
    this.loggingService.enviarMensajeConsola("Agregamos persona: "+persona.nombre)
    if(this.personas == null){
      this.personas = []
    }
    this.personas.push(persona)
    this.dataServices.guardarPersonas(this.personas)
  }

  public encontrarPersona(indice:number):Persona{
    let persona:Persona = this.personas[indice]
    return persona
  }

  public modificarPersona(index:number,persona:Persona):void{
    let persona1 = this.personas[index]
    persona1.nombre = persona.nombre
    persona1.apellido = persona.apellido
  }

  public eliminarPersona(index:number):void{
    this.personas.splice(index,1)
  }

}
