import { Component } from '@angular/core';

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

}
