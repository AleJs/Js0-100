'use strict';

function prinTask(name) {
    var taskli = document.createElement('li');
    taskli.classList.add('liclass');
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    var taskspan = document.createElement('span');
    taskspan.textContent = name;
    taskspan.setAttribute('contenteditable', '');

    var taskremove = document.createElement('a');
    taskremove.textContent = 'x';
    taskremove.href = "";
    taskli.appendChild(checkbox);
    taskli.appendChild(taskspan);
    taskli.appendChild(taskremove);
    newListEl.appendChild(taskli);
    editTask();
    completeTask();
}