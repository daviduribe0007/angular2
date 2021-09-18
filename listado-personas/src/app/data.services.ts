import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {

    constructor(private httpClient: HttpClient
        ,private loginService: LoginService) { }

    //Cargar personas
    cargarPersonas() {
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-bfba6-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }
    //Guardar personas
    guardarPersonas(personas: Persona[]) {
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-bfba6-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas)
            .subscribe(
                response => {
                    console.log("resultado guardar personas" + response)
                },
                err => { console.log("Error al guardar personas" + err) }
            );
    }



    modificarPersona(index: number, persona: Persona) {
        let url: string;
        const token = this.loginService.getIdToken();
        url = 'https://listado-personas-bfba6-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;

        this.httpClient.put(url, persona)
            .subscribe(response => {
                console.log("resultado modificado persona " + response);
            },
                error => { console.log("Error en modificar persona " + error); }
            )
    }

    eliminarPErsona(index: number){
        let url: string;
        const token = this.loginService.getIdToken();
        url = 'https://listado-personas-bfba6-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;

        this.httpClient.delete(url)
            .subscribe(response => {
                console.log("resultado eliminar persona " + response);
            },
                error => { console.log("Error en eliminar persona " + error); }
            )
    }
}