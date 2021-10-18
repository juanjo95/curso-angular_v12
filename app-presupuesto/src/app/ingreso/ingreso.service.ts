import { Ingreso } from './ingreso.model';

export class IngresoServicio{

  ingresos:Ingreso[] = [new Ingreso("Salario",4000), new Ingreso("Venta coche",500)]

  public eliminar(ingreso:Ingreso):void{
    const indice:number = this.ingresos.indexOf(ingreso)

    /* Elimina el registro que coincida con el indice con el metodo .splice(indice,cantidadElementos) */
    this.ingresos.splice(indice,1)
  }

}
