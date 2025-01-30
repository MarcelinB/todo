const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3001/index.html';

test.describe('To-Do App E2E', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto(BASE_URL);
    });

    test('Ajouter une tâche', async ({ page }) => {
        const taskText = 'Nouvelle tâche E2E';

        await page.fill('#taskInput', taskText);
        await page.click('button:has-text("+")');

        const task = page.locator('ul#taskList li').last();
        await expect(task).toContainText(taskText);
    });

    test('Marquer une tâche comme complétée', async ({ page }) => {
        const checkbox = page.locator('ul#taskList li input[type="checkbox"]').last();
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    });

    test('Modifier une tâche', async ({ page }) => {
        const taskItem = page.locator('ul#taskList li').last();
        const editButton = taskItem.locator('button:text("🖊️")');
    
        await expect(editButton).toBeVisible();
        await editButton.click();
    
        // Sélectionner l'input qui apparaît après le clic sur "modifier"
        const inputField = taskItem.locator('input[type="text"]');
    
        // Vérifier que l'input est bien visible et y entrer du texte
        await expect(inputField).toBeVisible();
        await inputField.fill('Tâche mise à jour');
    
        // Appuyer sur "Enter" pour valider la modification
        await inputField.press('Enter');
    
        // Vérifier que la tâche a bien été mise à jour
        await expect(taskItem).toContainText('Tâche mise à jour');
    });
    

    test('Supprimer une tâche', async ({ page }) => {
        const taskItem = page.locator('ul#taskList li').last();
        const deleteButton = taskItem.locator('button:text("❌")');
    
        await expect(deleteButton).toBeVisible();
        await deleteButton.click();
    
        // Attendre que l'élément disparaisse
        await expect(taskItem).toBeHidden();
    });
    
    
});
