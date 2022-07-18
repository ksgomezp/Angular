import { Component, OnInit } from '@angular/core';
import { Country, CountryRegion } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [ 
  `
  button{
    margin-right: 5px;
    margin-top: 5px;
  }
  `
  ]
})
export class RegionComponent  {

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
  paises: CountryRegion[] = [];


  activarRegion(region:string){
    if(region === this.regionActiva){ return;}
    this.paises = [];
    this.regionActiva = region;

    this.paisService.buscarRegion(region)
        .subscribe(paises => {
          this.paises = paises
          console.log('Paises response: ', paises);
          
        });

  }

  getClaseCSS(region:string) : string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  constructor(private paisService: PaisService) { }



}
