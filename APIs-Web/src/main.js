import { createTodoItem } from "./todo.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todo-form');

/** @type {HTMLInputElement} */
const valueEl = document.querySelector('.todo-value');

/** @type {HTMLDivElement} */
const listEl = document.querySelector('.todo-list');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const divEl = createTodoItem({
    id: Math.random(),
    title: valueEl.value,
    completed: false
  });

  // Exercice 3
  // Effacer le contenu du champ une fois la todo ajoutée

  listEl.append(divEl);
});


// Exercice 4
// Ecouter le clic de la checkbox du formulaire :
// <input type="checkbox" class="todo-form-toggle">
// Cocher ou décocher les checkboxes de la liste en conséquence
