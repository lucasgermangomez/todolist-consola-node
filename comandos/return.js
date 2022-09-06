const tasksData = require('../tasksData');

const retorno = (titulo) => {
    for (task of tasksData) {
        if (task.title === titulo) {
            return task.desc;
        }
    }
    return false;
}

module.exports = retorno;