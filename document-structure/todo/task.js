const addTodoElementButton = document.querySelector('#tasks__add'),
    taskInputElement = document.querySelector('#task__input'),
    taskList = document.querySelector('#tasks__list');

function addTaskToList(task) {
    const taskItem = document.createElement('div'),
        taskItemTitle = document.createElement('div'),
        removeTaskItem = document.createElement('a');

    taskItemTitle.textContent = task;
    taskItemTitle.classList.add('task__title');

    removeTaskItem.innerHTML = '&times;';
    removeTaskItem.classList.add('task__remove');
    removeTaskItem.addEventListener('click', (event) => {
        event.preventDefault();

        removeTaskItem.parentElement.remove();
    });

    taskItem.classList.add('task');
    taskItem.appendChild(taskItemTitle);
    taskItem.appendChild(removeTaskItem);

    taskList.appendChild(taskItem);
}

function addTaskEvent(event) {
    if (event.keyCode == 13 || event.type == 'click') {
        if (taskInputElement.value.length > 0) {
            addTaskToList(taskInputElement.value);
        }

        taskInputElement.value = '';

        event.preventDefault();
    }


}

taskInputElement.addEventListener('keypress', addTaskEvent);

addTodoElementButton.addEventListener('click', addTaskEvent);



addTodoElementButton.addEventListener('click', (event) => {

});


// <div class="task">
//     <div class="task__title">
//         Сходить в магазин
//     </div>
//     <a href="#" class="task__remove">&times;</a>
// </div>