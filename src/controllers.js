/**
 * @file controllers.js - Logique métier des tâches
 * @module controllers
 */

const tasks = [];

/**
 * Récupérer toutes les tâches
 * @function
 * @returns {Object[]} Liste des tâches
 */
exports.getTasks = (req, res) => {
    res.json(tasks);
};

/**
 * Créer une tâche
 * @function
 * @param {Object} req.body - Corps de la requête avec { title: string, completed: boolean }
 * @returns {Object} Tâche créée
 */
exports.createTask = (req, res) => {
    const newTask = { id: tasks.length + 1, title: req.body.title, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

/**
 * Mettre à jour une tâche
 * @function
 * @param {string} req.params.id - ID de la tâche à modifier
 * @param {Object} req.body - Données mises à jour
 * @returns {Object} Tâche mise à jour
 */
exports.updateTask = (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });

    task.title = req.body.title || task.title;
    task.completed = req.body.completed ?? task.completed;
    res.json(task);
};

/**
 * Supprimer une tâche
 * @function
 * @param {string} req.params.id - ID de la tâche à supprimer
 * @returns {Object} Message de confirmation
 */
exports.deleteTask = (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Tâche non trouvée' });

    tasks.splice(index, 1);
    res.json({ message: 'Tâche supprimée' });
};
