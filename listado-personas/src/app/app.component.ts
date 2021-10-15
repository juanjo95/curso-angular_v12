import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { Component, OnInit } from '@angular/core';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de personas'

  /* Declaramos un arreglo de tipo Persona (persona.model.ts) */
  personas:Persona[] = []

  constructor(private LoggingService:LoggingService,
              private personasService:PersonasService){}

  /* Defina un ngOnInit() método para manejar cualquier tarea de inicialización adicional. */
  ngOnInit(): void {
    this.personas = this.personasService.personas
  }
}
