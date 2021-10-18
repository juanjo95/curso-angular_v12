import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos:Ingreso[] = []

  constructor(private ingresoServicio: IngresoServicio) { }

  /* Aprovechams este metodo para inicializar nuestro arreglo de ingresos */
  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos
  }

  public eliminarIngreso(ingreso:Ingreso):void{
    this.ingresoServicio.eliminar(ingreso)
  }

}
