import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.css']
})
export class OperadoresComponent {

  @Output() operadores = new EventEmitter<number>();
  numero1: number;

  numero2: number;

  
  

  suma() {
    console.log(this.numero1);
    this.operadores.emit(this.numero1 + this.numero2);
  }


}
