import { test, expect } from '@playwright/test';

test.describe('Todo Frontend', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should add a new todo', async ({ page }) => {
    await page.fill('#input-todo', 'New Todo');
    await page.click('#add-todo');
    await page.waitForSelector('#todo-list li');
    const todoText = await page.textContent('#todo-list li .todo');
    expect(todoText).toBe('New Todo');
    await page.click('#reset-todo');
  });

  test('should display the todo list', async ({ page }) => {
    await page.fill('#input-todo', 'Todo 1');
    await page.click('#add-todo');
    await page.fill('#input-todo', 'Todo 2');
    await page.click('#add-todo');
    await page.waitForSelector('#todo-list');
    const todos = await page.$$('#todo-list li');
    expect(todos.length).toBe(2);
    await page.click('#reset-todo');
  });

  test('should update a todo', async ({ page }) => {
    await page.fill('#input-todo', 'Todo 1');
    await page.click('#add-todo');
    await page.waitForSelector('#todo-list li');
    await page.click('#todo-list li .todo');
    const bgColor = await page.$eval(
      '#todo-list li',
      (el) => getComputedStyle(el).backgroundColor,
    );
    expect(bgColor).toBe('rgba(209, 213, 219, 0.8)');
    await page.click('#reset-todo');
  });

  test('should delete a todo', async ({ page }) => {
    await page.fill('#input-todo', 'New Todo');
    await page.click('#add-todo');
    await page.waitForSelector('#todo-list li');
    await page.click('#todo-list li button');
    const todos = await page.$$('#todo-list li');
    expect(todos.length).toBe(0);
  });

  test('should delete all todos', async ({ page }) => {
    await page.fill('#input-todo', 'Todo 1');
    await page.click('#add-todo');
    await page.fill('#input-todo', 'Todo 2');
    await page.click('#add-todo');
    await page.waitForSelector('#todo-list');
    await page.click('#reset-todo');
    const todos = await page.$$('#todo-list li');
    expect(todos.length).toBe(0);
  });
});
