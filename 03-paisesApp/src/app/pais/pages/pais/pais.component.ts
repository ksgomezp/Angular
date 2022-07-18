import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
     `
     li{
      cursor:pointer;
     }
     `
  ]
})
export class PaisComponent   {

  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencia: boolean = false;
  
  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.mostrarSugerencia = false; 

    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPais(this.termino)
        .subscribe((paises)=>{
          this.paises = paises;
          console.log(paises);
        }, (err) => {
           this.hayError = true;
           this.paises = [];
        });
    console.log(this.termino);
    
  }

  sugerencias(event:string){
    this.hayError = false;
    this.termino = event;
    this.mostrarSugerencia = true;
    this.paisService.buscarPais(event)
        .subscribe(paises => this.paisesSugeridos = paises.splice(0,5) ,
        (err) => this.paisesSugeridos = []
        );

  }

  buscarSugerencias(termino: string){
    this.buscar(termino);
  }


}
