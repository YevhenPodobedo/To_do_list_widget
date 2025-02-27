'use strict';

import { updateTodoList } from "./localStorage.js";
import { createEdit } from "./objectCreation.js";
import { displayTask } from "./rendering.js";
import { queryAll } from "./utils.js";
 
export function removeTask(nameBtn, todoList) {
  queryAll(nameBtn).forEach(item => {
    item.addEventListener('click', function(event) {
      const parent = event.target.closest('.task').getAttribute('id');

      todoList.forEach((item, i) => {
        if(item.id === Number(parent)) {

          setTimeout(() => {
            todoList.splice(i, 1);
            updateTodoList(todoList);
            displayTask(todoList);

          }, 1000)
        }
      })
    })
  })
};

export function editTask(nameBtn, todoList) {
  queryAll(nameBtn).forEach(item => {
    item.addEventListener('click', function(event) {
      
      const parent = event.target.closest('.task');
      const tagEdited = parent.querySelector('.task__text');

      parent.classList.remove('task--color');
      parent.classList.add('task--active-edit');
      parent.querySelector('.task__content').classList.remove('task__content--active');

        todoList.forEach((item) => {
          if(item.id === Number(parent.getAttribute('id'))) {
            tagEdited.parentNode.replaceChild(createEdit(item), tagEdited);
            saveEditTask(parent, todoList, item);
          }
        })
    })
  })
};

function saveEditTask(parent, todoList, item) {
  parent.querySelector('#btn-save').addEventListener('click', () => {

    parent.classList.remove('task--active-edit');

    item.edit = true;
    item.task = parent.querySelector('.task__text').value;
    updateTodoList(todoList);

    setTimeout(() => {
      displayTask(todoList);
    }, 900);
  });
};
