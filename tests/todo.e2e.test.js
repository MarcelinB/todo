const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

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
        const editButton = page.locator('ul#taskList li button:text("🖊️")').last();
        await editButton.click();
        
        page.on('dialog', async dialog => {
            await dialog.accept('Tâche modifiée en E2E');
        });

        await expect(page.locator('ul#taskList li')).toContainText('Tâche modifiée en E2E');
    });

    test('Supprimer une tâche', async ({ page }) => {
        const deleteButton = page.locator('ul#taskList li button:text("❌")').last();
        await deleteButton.click();

        await expect(page.locator('ul#taskList li')).not.toContainText('Tâche modifiée en E2E');
    });
});
