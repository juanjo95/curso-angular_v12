import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  /* ViewChild */
  @ViewChild('nombreInput') nombreInput: ElementRef
  @ViewChild('apellidoInput') apellidoInput: ElementRef

  constructor(private loggingService:LoggingService, private personasService:PersonasService){
    this.personasService.saludar.subscribe((indice:number) => alert("El indice es: "+(indice+1)) )
  }

  /* Defina un ngOnInit() método para manejar cualquier tarea de inicialización adicional. */
  ngOnInit(): void {}

  public agregarPersona():void{
    let persona1 = new Persona(this.nombreInput.nativeElement.value,this.apellidoInput.nativeElement.value)
    this.personasService.agregarPersona(persona1)
  }

}
