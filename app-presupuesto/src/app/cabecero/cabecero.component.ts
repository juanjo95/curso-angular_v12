import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  /* Es de tipo Input() ya que estas variables las vamos a RECIBIR del componete Padre */
  @Input() presupuestoTotal:number
  @Input() ingresoTotal:number
  @Input() egresoTotal:number
  @Input() pocertanjeTotal:number


  constructor() { }

  ngOnInit(): void {
  }

}
