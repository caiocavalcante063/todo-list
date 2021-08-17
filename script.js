// criando tarefa
function addTask() {
  const buttonAddTask = document.querySelector('button[id="criar-tarefa"]');

  buttonAddTask.addEventListener('click', () => {
    const taskList = document.querySelector('ol');
    const task = document.createElement('li');
    const taskInput = document.querySelector('input[id="texto-tarefa"]');

    task.classList.add('task');
    task.innerHTML = taskInput.value;
    taskList.appendChild(task);

    // limpando o text input
    taskInput.value = '';
  });
}
addTask();

// clicando em um item da lista
function clickTask() {
  const taskList = document.querySelector('ol');
  const listItem = document.getElementsByClassName('task');

  taskList.addEventListener('click', (event) => {
    for (let i = 0; i < listItem.length; i += 1) {
      if (listItem[i] !== event.target) {
        listItem[i].classList.remove('selected');
      }
    }
    event.target.classList.add('selected');
  });
}
clickTask();

// riscando um item da lista
function riscaLista() {
  const taskList = document.querySelector('ol');

  taskList.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
riscaLista();

// limpando a lista
function apagaTudo() {
  const apagaButton = document.querySelector('#apaga-tudo');
  const listItems = document.getElementsByClassName('task');

  apagaButton.addEventListener('click', () => {
    while (listItems[0]) {
      listItems[0].remove();
    }
  });
}
apagaTudo();

// remover finalizados
function removerFinalizados() {
  const rmFinalizadosButton = document.querySelector('#remover-finalizados');
  const completedTasks = document.getElementsByClassName('completed');

  rmFinalizadosButton.addEventListener('click', () => {
    while (completedTasks[0]) {
      completedTasks[0].remove();
    }
  });
}
removerFinalizados();
