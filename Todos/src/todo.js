/**
 *
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 */
export function createTodoItem(todo) {
  /*
  <div class="todo-item" data-todo-id="1">
    <input type="checkbox" class="todo-completed" checked>
    <label class="todo-title">ABC</label>
    <button class="todo-destroy">-</button>
  </div>
  */
  const divEl = document.createElement('div');
  divEl.className = "todo-item";
  divEl.dataset.todoId = todo.id;

  // Exercice 1 :
  // Créer la checkbox comme dans le commentaire ci-dessus
  // La cocher si todo.completed vaut true
  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = "todo-completed";
  checkboxEl.checked = todo.completed;
  divEl.append(checkboxEl);

  const labelEl = document.createElement('label');
  labelEl.innerText = todo.title
  divEl.append(labelEl);

  // Exercice 2 :
  // Créer le bouton destroy comme dans le commentaire ci-dessus
  // Au clic de ce bouton supprimer la balise <div class="todo-item"
  const buttonEl = document.createElement('button');
  buttonEl.className = 'todo-destroy';
  buttonEl.innerText = '-';
  divEl.append(buttonEl);

  return divEl;
}

// ^
// |
// |                           addEvent(click)
// |                           createTodoItem             remove
// |addEvent(submit)           cbSubmit                   cbDestroy
// +---------------------------ENTREE---------------------CLICK----->
