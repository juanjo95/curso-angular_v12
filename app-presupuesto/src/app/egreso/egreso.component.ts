import { Egreso } from './egreso.model';
import { Component, Input, OnInit } from '@angular/core';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos:Egreso[] = []

  @Input() ingresoTotal:number

  constructor(private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos
  }

  public eliminarEgreso(egreso:Egreso):void{
    this.egresoServicio.eliminar(egreso)
  }

  public calcularPorcentaje(egreso:Egreso):number{
    return egreso.valor / this.ingresoTotal
  }

}
