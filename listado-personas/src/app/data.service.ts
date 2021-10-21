import { LoginService } from './login/login.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from './persona.model';
@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient,
                private loginService:LoginService){}

    /*Leer personas, como el metogo get nos devuelve un objeto de tipo Observable, nos tenemos que subscribir para poder recuperar la informacion.
      Pero no nos subscribimos aca, sino que lo retornamos y nos subscribimos en el componente personas.component.ts que es alla donde esta el atributo de
      personas[], para setiarlo
    */
    public cargarPersonas(){
      let token = this.loginService.getIdToken()
      return this.httpClient.get('https://listado-personas-c0061-default-rtdb.firebaseio.com/datos.json?auth='+token)
    }

    //Guardar personas, como el metogo put nos devuelve un objeto de tipo Observable, nos tenemos que subscribir para poder recuperar la informacion.
    public guardarPersonas(personas:Persona[]){
      this.httpClient.put('https://listado-personas-c0061-default-rtdb.firebaseio.com/datos.json',  personas)
      .subscribe(
        response => console.log("Resultado de guardar las Personas " +response),
        error => console.log("Error al guardar Personas "+error)
      )
    }

    //Modificar personas, como el metogo put nos devuelve un objeto de tipo Observable, nos tenemos que subscribir para poder recuperar la informacion.
    public modificarPersona(indice:number,persona:Persona){
      let url:string
      url = 'https://listado-personas-c0061-default-rtdb.firebaseio.com/datos/'+indice+'.json'
      this.httpClient.put(url,persona)
      .subscribe(
        response => console.log("resultado modificar persona: "+response),
        error => console.log("error modificar persona: "+error)
      )
    }

    //Eliminar personas, como el metogo delete nos devuelve un objeto de tipo Observable, nos tenemos que subscribir para poder recuperar la informacion.
    public eliminarPersona(indice:number){
      let url:string
      url = 'https://listado-personas-c0061-default-rtdb.firebaseio.com/datos/'+indice+'.json'
      this.httpClient.delete(url)
      .subscribe(
        response => console.log("resultado elimiinar persona: "+response),
        error => console.log("error en eliminar persona: "+error)
      )
    }

}
