const tasksData = require('../tasksData');

    const find = (titulo) => {
    for (objeto of tasksData) {
        if (objeto.title === titulo) {
            return true;
            }
        }
        return false;
    }

    module.exports = find;

