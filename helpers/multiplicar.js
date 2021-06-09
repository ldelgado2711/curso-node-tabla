const fs = require('fs');
const colores = require('colors');

// usando promesas
// const crearArchivo = ( base = 5 ) => {
//     return new Promise( (resolve, reject) => {        
//         console.log('====================================');
//         console.log('          Tabla del: ', base)
//         console.log('====================================');
        
//         let salida ='';
    
//         for (let i=0; i<=10;i++){
//             salida+=`${base} x ${i} = ${base*i}\n`;
//         }
    
//         console.log(salida);
    
//         fs.writeFileSync(`tabla-${base}.txt`,salida);

//         (true)
//             ?resolve(`tabla-${base}.txt`)
//             :reject('No se puedo crear el archivo');
//     })
// };

// usando Async
const crearArchivo = async ( base = 5,listar=false, hasta=10) => {     
    try {
        let salida  = '', 
            consola ='';
    
        for ( let i=0; i <= hasta; i++){
            salida  +=`${ base } x ${ i } = ${ base * i }\n`;
            consola +=`${ base } ${ 'x'.green } ${ i } ${ '='.yellow } ${ base * i }\n`;
        }
    
        if (listar) {
            console.log('===================================='.green);
            console.log('          Tabla del: ', colores.magenta(base) )
            console.log('===================================='.green);            
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivo
}