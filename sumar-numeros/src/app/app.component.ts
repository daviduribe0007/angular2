import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicacion de calculadora';
  
  resultado1:number;

  operadoresAgregados(result:number)
  {
    this.resultado1 = result;
  }
 

}
