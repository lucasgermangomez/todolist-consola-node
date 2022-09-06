const find = require('./comandos/find.js');
const list = require('./comandos/list.js');

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
    default: {
        console.log("El comando ingresado no existe");
        break;
    }
}