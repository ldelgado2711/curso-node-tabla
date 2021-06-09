const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('h',{
        alias:'hasta',
        type:'numeric',
        default:10,
        describe:'Hasta que numero multiplicar'
    })       
    .option('l',{
        alias:'listar',
        type:'boolean',
        default:false,
        describe:'Muestra la tabla en la consola'
    }) 
    .check( (argv,options)=>{
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        if (isNaN(argv.h)) {
            throw 'Hasta tiene que ser un numero';
        } else {
            if( argv.h <= 0) {
                throw 'Hasta tiene que ser un numero positivo'; 
            }
        }       
        return true;
    })       
    .argv;

    module.exports = argv;