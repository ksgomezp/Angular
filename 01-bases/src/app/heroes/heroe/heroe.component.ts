import { Component } from "@angular/core";
import { concat } from "rxjs";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{


    nombre: string = 'IronMan';
    edad: number = 45;


    get nombreCapitaizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(){
        this.nombre = 'SpiderMan';
    }

    cambiarEdad(){
        this.edad = 77;
    }

}