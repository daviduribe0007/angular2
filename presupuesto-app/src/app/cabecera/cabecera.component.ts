import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  titulo: String = "Presupuesto Disponible:";
  ingreso: String = "Ingresos";
  egreso: String = "Egresos";
  @Input() presupuestoTotal:number=0;
  @Input() ingresoTotal:number=0;
  @Input() egresoTotal:number=0;
  @Input() PorcentajeTotal:number=0;


  constructor() { }

  ngOnInit(): void {

  }

}
