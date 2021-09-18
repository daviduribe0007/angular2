import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { LogginService } from "./LogginService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService {
  personas: Persona[] = [];

  saludar = new EventEmitter<number>();
  constructor(private logginService: LogginService,
    private dataServices: DataServices) {

  }

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }


  obtenerPersonas() {
    return this.dataServices.cargarPersonas();
  }


  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataServices.modificarPersona(index, persona)
  }

  agregarPersona(persona: Persona) {
    //this.logginService.enviarMensajeAConsola("agregamos al arreglo la persona : "+ persona.nombre)

    this.logginService.enviarMensajeAConsola("agregamos la persona : " + persona.nombre);
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas)
  }

  borrarPersona(index: number) {

    this.personas.splice(index, 1);
    this.dataServices.eliminarPErsona(index);
    //para que los indices se regeneren cargamos de nuevo el arreglo paraque se regeneren los incdies 
    this.modificarPersonas();
  }

  modificarPersonas(){
    if(this.personas != null) {
      this.dataServices.guardarPersonas(this.personas);
    }
  }


}
