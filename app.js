
const argv=require('./config/yargs').argv;
const colors = require('colors');

// const multiplicar = require ('./multiplicar/multiplicar')
// o desestructurar el objeto
const { crearArchivo, listarArchivo } = require ('./multiplicar/multiplicar')

let comando = argv._[0];
let base= argv.base;
let limite= argv.limite;

switch (comando){
    
    case 'crear':
        crearArchivo(base,limite)
            .then (
                    archivo=>console.log('archivo ', colors.green(archivo), ' creado'))
            .catch(e=>console.log(e));
        break;
    case 'listar':
        listarArchivo(base,limite);
       /* .then (
                archivo=>console.log(`archivo ${archivo} listado`))
        .catch(e=>console.log(e));
       */
        break;
    default:
        console.log('comando no reconocido');
        break;
    
}



// let argv2 = process.argv;
// let baseParam =argv[2];
// let base = baseParam.split('=')[1];


// console.log(argv.base);
// console.log(argv);

