let tasks = [];
let idCounter = 1;

module.exports = {
    tasks,
    getNextId: () => idCounter++,
};
