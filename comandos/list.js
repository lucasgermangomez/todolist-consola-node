const tasksData = require('../tasksData');


const list = () => {
    const array = [];

    for (task of tasksData) {
        const arr = task.title;
        array.push(arr);
    }
    return JSON.stringify(array);
}

module.exports = list;