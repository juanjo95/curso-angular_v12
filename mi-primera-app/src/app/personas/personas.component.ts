import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']

})
export class PersonasComponent{

  private deshabilitar!:boolean
  mensaje:string = 'No se ha agregado a ninguna persona'
  titulo:string = "Ingeniero"

  public setEstadoBoton(estado:boolean = false):void{
    this.deshabilitar = estado
  }

  public getEstadoBoton():boolean{
    this.setEstadoBoton()
    return this.deshabilitar
  }

  public agregarPersona():void{
    this.mensaje = "Persona agregada"
  }

  /* Input de Event Binding
  public modificarTitulo(event:Event):void {
    console.log("Entrando al metodo nombre")
    this.titulo = (<HTMLInputElement> event.target).value
  }
  */

}
