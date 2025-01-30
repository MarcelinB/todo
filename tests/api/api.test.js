const request = require('supertest');
const express = require('express');
const routes = require('../../src/routes');

const app = express();
app.use(express.json());
app.use('/api', routes);

describe('API To-Do List', () => {
    let createdTaskId;

    test('Créer une tâche', async () => {
        const res = await request(app).post('/api/tasks').send({ title: 'Nouvelle tâche' });
        expect(res.status).toBe(201);
        expect(res.body.title).toBe('Nouvelle tâche');
        expect(res.body).toHaveProperty('id');
        createdTaskId = res.body.id;
    });

    test('Récupérer toutes les tâches', async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body.some(task => task.id === createdTaskId)).toBeTruthy();
    });

    test('Modifier une tâche', async () => {
        const updatedTitle = 'Tâche mise à jour';
        const res = await request(app)
            .put(`/api/tasks/${createdTaskId}`)
            .send({ title: updatedTitle, completed: true });

        expect(res.status).toBe(200);
        expect(res.body.title).toBe(updatedTitle);
        expect(res.body.completed).toBe(true);
    });

    test('Récupérer la tâche mise à jour', async () => {
        const res = await request(app).get('/api/tasks');
        const updatedTask = res.body.find(task => task.id === createdTaskId);

        expect(updatedTask).toBeDefined();
        expect(updatedTask.title).toBe('Tâche mise à jour');
        expect(updatedTask.completed).toBe(true);
    });

    test('Supprimer une tâche', async () => {
        const res = await request(app).delete(`/api/tasks/${createdTaskId}`);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message');
        expect(["Tâche supprimée", "Task deleted successfully"]).toContain(res.body.message);
    });

    test('Vérifier la suppression', async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.body.some(task => task.id === createdTaskId)).toBeFalsy();
    });
});
