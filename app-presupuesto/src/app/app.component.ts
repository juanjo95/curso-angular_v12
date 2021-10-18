import { Component, Injectable } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ingresos:Ingreso[] = []
  egresos:Egreso[] = []

  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio){
    this.ingresos = ingresoServicio.ingresos
    this.egresos = egresoServicio.egresos
  }

  public getIngresoTotal():number{
    let ingresoTotal:number = 0
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor
    })
    return ingresoTotal
  }

  public getIEgresoTotal():number{
    let egresoTotal:number = 0
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor
    })
    return egresoTotal
  }

  /* El porcentaje que corresponde del egreso comparado con el ingreso */
  public getPorcentajeTotal():number{
    return this.getIEgresoTotal() / this.getIngresoTotal()
  }

  public getPresupuestoTotal():number{
    return this.getIngresoTotal() - this.getIEgresoTotal()
  }

}
