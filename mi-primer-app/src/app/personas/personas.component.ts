import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent {


    desabilitar = false;
    mensaje = 'no se ha agregado personas';
    titulo = '';
    titulo2 = 'hi';
    mostrar = false
    agregarPersona() {
        this.mostrar = true;
        this.mensaje = 'persona agregada'
    }
    modificarTitulo(event: Event) {

        this.titulo = (<HTMLInputElement>event.target).value
    }
}