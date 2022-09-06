const find = require('./comandos/find.js');
const list = require('./comandos/list.js');
const retorno = require('./comandos/return.js');

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
                break;
            }

            console.log("Titulo buscado: " + title);
            console.log("Existe?: " + find(title));
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
        
        if (retorno(titulo) === false) {
            return console.log("El titulo ingresado no existe");
            }

        console.log("Titulo: " + titulo);
        console.log("Descripción: " + retorno(titulo));
        break;
    }

    
    
    default: {
        console.log("El comando ingresado no existe");
        break;
    }
}