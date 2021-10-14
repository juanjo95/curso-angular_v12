import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  operandoA!:number
  operandoB!:number

  mostrar():void{
    console.log(this.operandoA)
    console.log(this.operandoB)
  }

}
