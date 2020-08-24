const fs = require('fs');
const colors = require('colors');

let listarArchivo = (base,limite)=>{

    if (!Number(base)){
        console.log(`La base introducida ${base} no es un número`);
        return;
    }
    if (!Number(limite)){
        console.log (`El limite introducido ${limite} no es un número`);
        return;
    }

    let data='';    

    console.log('=================='.green);
    console.log(`La tabla del ${base}`);
    console.log('=================='.green);

    for(let i=1;i<=limite;i++){

        data += `${base} * ${i} = ${base*i}\n`;
        console.log(`${base} * ${i} = ${base*i}`);
    
    }

};

let crearArchivo = (base,limite) =>{

    return new Promise ((resolve,reject)=> {

        let data='';

        if (!Number(base)){
            reject (`La base introducida ${base} no es un número`);
            return;
        }
        if (!Number(limite)){
            reject (`El limite introducido ${limite} no es un número`);
            return;
        }

        for(let i=1;i<=limite;i++){

            data += `${base} * ${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`,data, (err) => {
            if (err) 
                reject(err);
            else 
                resolve(`tabla-${base}.txt`);
        });

    });

};

module.exports = {
    crearArchivo,
    listarArchivo 
}


