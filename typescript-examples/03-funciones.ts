function sumar(a: number, b: number): number{
    return a+b;
}

const sumarFlecha = (a:number,b:number): number => {
    return a+b; 
}

function multiplicar(numero: number, otroNumero?: number, base:number = 2){
    return numero * base;
}

// const resultado = multiplicar(5,10);

// console.log(resultado)

interface PersonajeK {
    nombre: string;
    pv: number;
    mostrarHp: () => void; 
}

function curar(personaje: PersonajeK, curarNivel: number): void{

    personaje.pv += curarNivel;
    console.log(personaje);
}   

const nuevoPersonaje: PersonajeK = {
    nombre: 'kev',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida:', this.pv);
    }
}

curar(nuevoPersonaje, 1000);