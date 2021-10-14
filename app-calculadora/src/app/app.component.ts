import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private titulo = 'Aplicación de Calculadora';
  operandoA!:number
  operandoB!:number
  resultado!:number

  public getTitulo():string{
    return this.titulo
  }

  public sumar():void{
    this.resultado = this.operandoA + this.operandoB
  }

  public restar():void{
    this.resultado = this.operandoA - this.operandoB
  }

  public multiplicar():void{
    this.resultado = this.operandoA * this.operandoB
  }

  public dividir():void{
    if(this.operandoB != 0){
      this.resultado = this.operandoA / this.operandoB
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Error al dividir entre 0',
        text: 'El operandoB no puede ser 0!'
      })
    }
  }

}
