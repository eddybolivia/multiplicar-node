// Tabla de multitplicar

const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// const { crearArchivo } = require('./multiplicar/multiplicar'); // usando la destructuracion 

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('Listar'); 
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        // console.log('Crear');

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

// console.log(multiplicar);

// const base = 'abc';
// const base = '4';

// console.log(process);
// console.log(process.argv);

// const argv2 = process.argv;
//const parametro = argv[2]; // hace referencia al tercer argumento de argv. Es ahi donde especificaremos la base de multiplicacion

// console.log(parametro);

// const base = parametro.split('=')[1]; // codigo dificultoso de entender para otro programador.

// console.log(base);

/* REALMENTE UN DOLOR DE CABEZA TOMAR EN CUENTA TODAS LAS VALIDACIONES AL MOMENTO DE ENVIAR LA BASE POR PARAMETRO. Es por esta razon que existe ya paquetes que me resuelven las validaciones */



// console.log(argv);
// console.log(argv2);
// console.log(argv.base);
// console.log('Limite:', argv.limite);