import { LoginService } from './login/login.service';
import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de personas'

  firebaseConfig = {
    apiKey: "AIzaSyDwxehQJi4TL7Wl4SKJ4MpHHhqGA7twhvM",
    authDomain: "listado-personas-c0061.firebaseapp.com",
  }

  constructor(private loginService:LoginService){}

  ngOnInit():void{
    initializeApp(this.firebaseConfig);
  }

  public isAutenticado(){
    return this.loginService.isAutenticado()
  }

  public salir(){
    this.loginService.logout()
  }
}
