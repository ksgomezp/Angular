interface Pasajero{
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Kevy'
}

const pasajero2: Pasajero = {
    nombre: 'Violeta',
    hijos: ['sant', 'deliciosa']
}

function imprimeHijos(pasajero: Pasajero) : void{
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos); 
}

imprimeHijos(pasajero1);