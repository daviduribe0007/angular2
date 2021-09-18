import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.Service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas : Persona[] = [];

  constructor(private personaService: PersonasService,
     private router: Router
    ){
  
  }
  ngOnInit(): void{
   this.personaService.obtenerPersonas()
   .subscribe(
      (personas: any) =>{ 
        this.personas = personas;
        this.personaService.setPersonas(personas);
      });
  }

  agregar(){
    this.router.navigate(['/personas/agregar']);
  }
}
