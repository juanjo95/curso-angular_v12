import { Persona } from './../persona.model';
import { Component, OnInit } from '@angular/core';
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
    this.personasService.obtenerPersonas()
    .subscribe(
      (personas:any) => {
        this.personas = personas
        this.personasService.setPersonas(personas)
      }
    )
  }

  public agregar():void{
    this.router.navigate(['personas/agregar'])
  }

}
