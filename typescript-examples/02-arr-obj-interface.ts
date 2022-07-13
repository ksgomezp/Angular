let habilidades: string []= ['dash', 'health','speed'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'eleven',
    hp: 100,
    habilidades: ['fly', 'swimm']
}

personaje.puebloNatal = 'New york';

console.table(personaje)