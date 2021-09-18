import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  @Input() ingresoTotal: number;

  egresos:Egreso[]=[];
  
  tituloEgresos:string ="Egresos";

  constructor(private egresoService: EgresoService) { }

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
  }

  eliminarRegistro(egreso:Egreso){
    this.egresoService.eliminar(egreso);
  }

  calcularProcentaje(egreso: Egreso){
    return egreso.valor/this.ingresoTotal;
  }

}
