import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogginService } from '../../LogginService.service';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../persona.Service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
  //encamsulamiento en el web para un service unico se declara aqui
  //#apellidoRef y si no se va al app.modules.ts en providers se pone y se importa para todos los components
})
export class FormularioComponent  implements OnInit{
  
// @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:String = ""; //esto se usa con el two eay binding
  apellidoInput:String = "";
  // @ViewChild('nombreRef') nombre: ElementRef;
  // @ViewChild('apellidoRef') apellido: ElementRef;

  index:number;
  modoEdicion:number;

  ngOnInit(){
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion!=null && this.modoEdicion===1){
     let persona: Persona=  this.personaService.encontrarPersona(this.index);
     this.nombreInput =persona.nombre;
     this.apellidoInput = persona.apellido;
    }
  }

  //dependency injection se usa 
  constructor(private logginService:LogginService, 
    private personaService: PersonasService,  
    private router:Router,
    private route:ActivatedRoute ){
      this.personaService.saludar.subscribe((indice: number)=> alert("El indice es  : " + indice));
       

  }
  
  onGuardarPersona(){
    // agregarPersona(nombre: HTMLInputElement, apellido: HTMLInputElement){ con atributos
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    // let persona1 = new Persona(nombre.value,apellido.value); con atributos
    // let persona1 = new Persona(this.nombre.nativeElement.value,this.apellido.nativeElement.value);
    //this.logginService.enviarMensajeAConsola("Enviar persona "+ persona1.nombre + " apellido : " + persona1.apellido);
    // this.personaCreada.emit(persona1);
    
    this.router.navigate(['personas']);

    if(this.modoEdicion!=null && this.modoEdicion===1){
      this.personaService.modificarPersona(this.index , persona1);
    }else{
      this.personaService.agregarPersona(persona1);
    }
  }

  onEliminarPersona(){
    if(this.modoEdicion!=null && this.modoEdicion===1){
      this.personaService.borrarPersona(this.index);
    }
    this.router.navigate(['personas']);
    
  }
}
