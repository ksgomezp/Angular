import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Kevyn';
  genero: string = 'masculino';
  invitacionObj = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }


  // /i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Pepe'];
  clientesMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos 1 cliente esperando',
    'other': 'Tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre === 'Kevyn'? this.nombre = 'Santiago' : this.nombre = 'Kevyn';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValuePipe

  persona = {
    nombre: 'Kevn',
    edad: 111,
    direccion: 'London'
  }

//JSON pipe

heroes = [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Superman',
    vuela: true
  }
]

//Async pipe
miObservable = interval(1000); //0,1,2,3,4,5

valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Tenemos data de promesa')
    }, 3500);
});
}
