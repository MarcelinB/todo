const { tasks, getNextId } = require('./tasks');

/**
 * Créer une nouvelle tâche
 */
exports.createTask = (req, res) => {
    const { title, completed } = req.body;
    if (!title) return res.status(400).json({ error: 'Le titre est requis' });

    const newTask = { id: getNextId(), title, completed: completed || false };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

/**
 * Récupérer toutes les tâches
 */
exports.getTasks = (req, res) => {
    res.json(tasks);
};

/**
 * Mettre à jour une tâche
 */
exports.updateTask = (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });

    task.title = req.body.title || task.title;
    task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;
    res.json(task);
};

/**
 * Supprimer une tâche
 */
exports.deleteTask = (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Tâche non trouvée' });

    tasks.splice(index, 1);
    res.json({ message: 'Task deleted successfully' });
};
