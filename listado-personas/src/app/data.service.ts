import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from './persona.model';


@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}

    //Guardar personas
    public guardarPersonas(personas:Persona[]):void{
      this.httpClient.put('https://listado-personas-c0061-default-rtdb.firebaseio.com/datos.json',  personas)
      .subscribe(
        response => console.log("Resultado de guardar las Personas " +response),
        error => console.log("Error al guardar Personas "+error)
      )
    }

}
