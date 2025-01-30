/**
 * @file routes.js - Définition des routes de l'API
 * @module routes
 */

const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask } = require('./controllers');

/**
 * Récupérer toutes les tâches
 * @route GET /api/tasks
 * @group Tâches - Opérations liées aux tâches
 * @returns {Object[]} 200 - Liste des tâches
 */
router.get('/tasks', getTasks);

/**
 * Créer une nouvelle tâche
 * @route POST /api/tasks
 * @param {Object} req.body - Corps de la requête avec { title: string, completed: boolean }
 * @returns {Object} 201 - Nouvelle tâche créée
 */
router.post('/tasks', createTask);

/**
 * Mettre à jour une tâche
 * @route PUT /api/tasks/:id
 * @param {string} req.params.id - ID de la tâche à mettre à jour
 * @returns {Object} 200 - Tâche mise à jour
 */
router.put('/tasks/:id', updateTask);

/**
 * Supprimer une tâche
 * @route DELETE /api/tasks/:id
 * @param {string} req.params.id - ID de la tâche à supprimer
 * @returns {Object} 200 - Message de confirmation
 */
router.delete('/tasks/:id', deleteTask);

module.exports = router;
