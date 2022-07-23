import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {


  enMayusculas: boolean = true;
  
  ordenarPor: string = 'nombre';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Goku',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Kevyn',
      vuela: true,
      color: Color.negro
    },
    {
      nombre: 'Green lintern',
      vuela: true,
      color: Color.verde
    }
  ];
  
  cambiarOrden(valor:string){    
    this.ordenarPor = valor;
  }

}
