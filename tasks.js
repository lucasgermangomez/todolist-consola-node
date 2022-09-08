const find = require('./comandos/find.js');
const list = require('./comandos/list.js');
const retorno = require('./comandos/return.js');
const edit = require('./comandos/edit.js');
const filter = require('./comandos/filter.js');

const action = process.argv[2];
if (!action) {
  console.log("Acción inválida");
  return;  
} 

switch (action) {
    case "find": {
            const title = process.argv[3];

            if (!title) {
                return console.log("Olvidaste introducir el titulo");
            }

            console.log("Titulo buscado: " + title);
            console.log("Existe?: " + find(title));
            break;
    }

    case "list": {
        console.log("Listado de Tareas: " + list());
        break;        
    }
    case "return": {
        const titulo = process.argv[3]

        if(!titulo) {
            return console.log("Debes ingresar un titulo");
        } 
        
        if (!retorno(titulo)) {
            return console.log("El titulo ingresado no existe");
            }

        console.log("Titulo: " + titulo);
        console.log("Descripción: " + retorno(titulo));
        break;
    }

    case "edit": {
        const titulo = process.argv[3];
        const newDesc = process.argv[4];

        if(!titulo || !newDesc) {
            return console.log("Faltan datos, ingrese titulo y nueva descripcion para continuar");   
        }
        if (edit(titulo,newDesc) === false) {
            return console.log("El titulo ingresado no se pudo encontrar entre las tareas");
        }

        console.log(edit(titulo,newDesc));
        break;
    }

    case "filter": {
        const string = process.argv[3];
        if(!string) {
            return console.log('No ingreso ningun caracter');
        }

        console.log(filter(string));
        break;
    }

    default: {
        console.log("El comando ingresado no existe");
        break;
    }
}