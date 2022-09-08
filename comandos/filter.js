const tasksData = require('../tasksData');

const filter = (string) => {
    const coincidencias = [];
    for (task of tasksData) {
        if (task.title.toLowerCase().includes(string.toLowerCase())) {
            coincidencias.push(task.title);
        }
    }
    if (coincidencias.length === 0) {
        const resultado = 'No se encontraron coincidencias';
        return resultado;
    } else {
        const resultado = "Coincidencias encontradas: " + JSON.stringify(coincidencias);
        return resultado;
    }
}

module.exports = filter;