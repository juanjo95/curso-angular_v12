import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  /* Declaramos un arreglo de tipo Persona (persona.model.ts) */
  personas:Persona[] = []

  constructor(private personasService:PersonasService,
              private router:Router){}

  /* Defina un ngOnInit() método para manejar cualquier tarea de inicialización adicional. */
  ngOnInit(): void {
    this.personas = this.personasService.personas
  }

  public agregar():void{
    this.router.navigate(['personas/agregar'])
  }

}
