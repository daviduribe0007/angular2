import { Component, OnInit } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoService } from './egreso/egreso.servicio';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingreso.servicio';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  
  title = 'presupuesto-app';
  ingresos:Ingreso[]= [];
  egresos: Egreso[] = [];

  constructor(
    private ingresoService: IngresoService,
    private egresosService: EgresoService){
      this.ingresos = ingresoService.ingresos;
      this.egresos = egresosService.egresos;
    }  

  ngOnInit(): void {
  }

  getIngresoTotal(){
    let ingresoTotal:number=0;
    this.ingresos.forEach(ingreso=>{
      ingresoTotal+= ingreso.valor;
    });
    return ingresoTotal;
    
  }

  getEgresoTotal(){
    let egresoTotal:number=0;
    this.egresos.forEach(egreso=>{
      egresoTotal+= egreso.valor;
    });
    return egresoTotal;    
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal();
  }

}
