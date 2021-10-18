import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string = "ingresoOperacion"
  descripcionInput:string
  valorInput:number

  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
  }

  public tipoOperacion(evento: Event):void{
    this.tipo = (evento.target as HTMLSelectElement).value
  }

  public agregarValor():void{
    if(this.tipo === "ingresoOperacion"){
        this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput,this.valorInput))
    }else{
        this.egresoServicio.egresos.push(new Egreso(this.descripcionInput,this.valorInput))
    }
  }

}
