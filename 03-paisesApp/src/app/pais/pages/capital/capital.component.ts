import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent  {

  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];
  
  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarCapital(this.termino)
        .subscribe((paises)=>{
          this.paises = paises;
          console.log(paises);
        }, (err) => {
           this.hayError = true;
           this.paises = [];
        });
    console.log(this.termino);
    
  }

}
