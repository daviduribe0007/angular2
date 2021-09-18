import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'listado de  personas';

  constructor(private loginService: LoginService) {
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyA0LfiulbFNc_8buW7N4LOpuCqiCzevaeo",
      authDomain: "listado-personas-bfba6.firebaseapp.com",
    })

  }

  isAutenticado(){
     return this.loginService.isAutenticado();

  }

  salir() {
this.loginService.logout();

  }

  // personaAgregada(persona:Persona){ se quita ya que se usan servicios
  //   // this.logginService.enviarMensajeAConsola("agregamos al arreglo la persona : "+ persona.nombre)
  //   // this.personas.push(persona); se comenta ya que aqui no se usa el servicio
  //   this.personaService.agregarPersona(persona);
  // }

}
