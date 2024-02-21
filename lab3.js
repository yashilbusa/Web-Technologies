let todoList = [];
function ascending() {
  todoList.sort(function(a, b) {
    return a.todo.localeCompare(b.todo);
  });
  render();
}


let originalList = [];
function ascending() {
  originalList = todoList.slice();
  todoList.sort(function(a, b) {
    return a.todo.localeCompare(b.todo);
  });
  render();
}
function restore() {
  todoList = originalList.slice();
  render();
}

function addTodo() {
  let todoText = document.getElementById('todo').value;
  todoList.push({
    todo: todoText,
    done: false
  });
  render();
}

function todoListHtml() {
  let html = '';
  todoList.forEach(function(todo, index) {
    html += '<li>';
    html += '<label>';
    html += '<input type="checkbox" onclick="toggleDone(' + index + ')"';
    if (todo.done) {
      html += ' checked';
    }
    html += '>';
    html += todo.todo;
    html += '</label>';
    html += '</li>';
  });
  return html;
}

function render() {
  document.getElementById('todolist').innerHTML = todoListHtml();
}