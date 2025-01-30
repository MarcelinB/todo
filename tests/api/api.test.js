const request = require('supertest');
const express = require('express');
const routes = require('../../src/routes');

const app = express();
app.use(express.json());
app.use('/api', routes);

describe('API To-Do List', () => {
    test('Créer une tâche', async () => {
        const res = await request(app).post('/api/tasks').send({ title: 'Nouvelle tâche' });
        expect(res.status).toBe(201);
        expect(res.body.title).toBe('Nouvelle tâche');
    });

    test('Récupérer toutes les tâches', async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});
