import { Egreso } from "./egreso.model";

export class EgresoServicio{

  egresos:Egreso[] = [new Egreso("Renta Dpto",900), new Egreso("Ropa",200)]

  public eliminar(egreso:Egreso):void{
    const indice:number = this.egresos.indexOf(egreso)

    /* Elimina el registro que coincida con el indice con el metodo .splice(indice,cantidadElementos) */
    this.egresos.splice(indice,1)
  }


}
