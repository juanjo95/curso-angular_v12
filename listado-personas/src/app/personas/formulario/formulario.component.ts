import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, ViewChild, OnInit, Renderer2 } from '@angular/core';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  /* Capturo la referencia de mi elemento formulario */
  @ViewChild('my_form') formulario: ElementRef

  nombreInput:string
  apellidoInput:string
  index:number
  modoEdicion:number

  constructor(private loggingService:LoggingService,
              private personasService:PersonasService,
              private router:Router,
              private route: ActivatedRoute,
              private renderer: Renderer2){

    this.personasService.saludar.subscribe((indice:number) => alert("El indice es: "+(indice+1)) )
  }

  /* Defina un ngOnInit() método para manejar cualquier tarea de inicialización adicional.
    Este metodo sirve para cuando se cargue este componente, que es lo primero que deber hacer
  */
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id']
    /* Si el indice es != de null, quiere decir que estamos en modo edicion */
    /*if(this.index){
      let persona:Persona = this.personasService.encontrarPersona(this.index)
      this.nombreInput =  persona.nombre
      this.apellidoInput = persona.apellido
    }*/

    /* Como devuelve un String, para convertirlo a numero se le agrega un + y listo */
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion']

    if(this.modoEdicion != null && this.modoEdicion === 1){
      let persona:Persona = this.personasService.encontrarPersona(this.index)
      this.nombreInput =  persona.nombre
      this.apellidoInput = persona.apellido
    }

  }

  public guardarPersona():void{
    let persona1 = new Persona(this.nombreInput,this.apellidoInput)

    /* Si la variable de index existe, si existe es porque estamos en modo edicion, sino agrega una persona nueva */
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.personasService.modificarPersona(this.index,persona1)
    }else{
      this.personasService.agregarPersona(persona1)
    }

    this.router.navigate(['personas'])

    /* Una vez haya creado la persona, reseteo mi formulario */
    this.formulario.nativeElement.reset();
  }

  public eliminarPersona():void{
    if(this.index != null){
      this.personasService.eliminarPersona(this.index)
    }
    this.router.navigate(['personas'])
  }

}
