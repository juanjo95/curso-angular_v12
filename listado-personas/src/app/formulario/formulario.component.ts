import { Component, ElementRef, ViewChild, OnInit, Renderer2 } from '@angular/core';
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

  /* Capturo la referencia de mi elemento formulario */
  @ViewChild('my_form') formulario: ElementRef

  constructor(private loggingService:LoggingService, private personasService:PersonasService, private renderer: Renderer2){
    this.personasService.saludar.subscribe((indice:number) => alert("El indice es: "+(indice+1)) )
  }

  /* Defina un ngOnInit() método para manejar cualquier tarea de inicialización adicional. */
  ngOnInit(): void {}

  public agregarPersona():void{
    let persona1 = new Persona(this.nombreInput.nativeElement.value,this.apellidoInput.nativeElement.value)
    this.personasService.agregarPersona(persona1)

    /* Una vez haya creado la persona, reseteo mi formulario */
    this.formulario.nativeElement.reset();

    /* EJEMPLO PEQUENO DE COMO UTILIZAR EL RENDER, ES LA MEJOR OPCION AL MOMENTO DE MANIPULAR EL DOM */
    //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
    //this.renderer.addClass(this.myButton.nativeElement, "my-class");
    //this.renderer.setProperty(this.formulario.nativeElement,'id',"hola")

  }

  /* Metodo para resetear el formulario una vez enviado, usando la forma tradicional con el getElementById(id_formulario), es mala practica*/
  /*clearForm(){
    (<HTMLFormElement>document.getElementById("formulario")).reset();
  }*/

}
