
interface Superheroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;

}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: Superheroe = {
    nombre: 'spiderman',
    edad: 33,
    direccion:  {
        calle: 'Main st',
        pais: 'USA',
        ciudad: 'NY',

    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;        
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);