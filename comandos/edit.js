const tasksData = require('../tasksData');

const edit = (titulo, nuevaDescripcion) => {
    for (objeto of tasksData) {
        if (objeto.title === titulo) {
            objeto.desc = nuevaDescripcion;
            return objeto;
        }
    }
    return false;
};

module.exports = edit;