const tasksData = require('../tasksData');


const list = () => {
    const array = [];

    for (task of tasksData) {
        array.push(task.title);
    }
    return JSON.stringify(array);
}

module.exports = list;