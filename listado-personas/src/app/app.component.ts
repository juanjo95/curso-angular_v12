import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { Component, OnInit } from '@angular/core';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de personas'

  constructor(){}

  ngOnInit(){}
}
