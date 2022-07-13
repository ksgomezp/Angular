
import { Producto, calculaISV} from "./06-desestructuracion-funcion";


const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 1000
    },
    {
        desc: 'Telefono 2',
        precio: 200
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total: ', total);
console.log('ISv: ', isv);
