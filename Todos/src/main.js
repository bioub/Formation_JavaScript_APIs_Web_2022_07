import { createTodoItem } from "./todo.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todo-form');

/** @type {HTMLInputElement} */
const valueEl = document.querySelector('.todo-value');

/** @type {HTMLDivElement} */
const listEl = document.querySelector('.todo-list');

/** @type {HTMLInputElement} */
const toggleEl = document.querySelector('.todo-form-toggle');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const divEl = createTodoItem({
    id: Math.random(),
    title: valueEl.value,
    completed: false
  });

  // Exercice 3
  // Effacer le contenu du champ une fois la todo ajoutée
  valueEl.value = '';

  listEl.append(divEl);
});


// Exercice 4
// Ecouter le clic de la checkbox du formulaire :
// <input type="checkbox" class="todo-form-toggle">
// Cocher ou décocher les checkboxes de la liste en conséquence
toggleEl.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxEls = listEl.querySelectorAll('.todo-completed');

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = toggleEl.checked;
  }
});

// Exercice 5
// Supprimer le addEventListener du bouton destroy dans todo.js :
// buttonEl.addEventListener('click', () => {
//   divEl.remove();
// });
// A la place écouter ici le click de listEl, se servir de event.target
// pour déterminer si click a eu lieu sur le bouton destroy
// et supprimer la ligne (.todo-item) si c'est le cas
listEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todo-destroy')) {
    const todoItemEl = target.closest('.todo-item');

    if (!todoItemEl.classList.contains('deleting')) {
      todoItemEl.classList.add('deleting')
      setTimeout(() => {
        todoItemEl.remove();
      }, 1000);
    }
  }
});


// Exercice 6
// Modifier le code de l'exercice 5
// Au click du bouton destroy ajouter la classe "deleting" à la ligne (.todo-item)
// En utilisant setTimeout supprimer la ligne au bout d'une seconde

