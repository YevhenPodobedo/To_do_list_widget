'use strict';

import { heightControl, heightObserver } from "./utils.js";
import { displayTask } from "./rendering.js";
import { todoList } from "./dataArray.js";
import { updateTodoList } from "./localStorage.js";
import { taskCreation } from "./objectCreation.js";
import { errorEmpty } from "./errors.js";
import { btnAdd, btnClearAllTasks, taskTextInput, listTasks, error } from "./variables-dom.js";
import { iconRotate } from "./elementAnimation.js";

displayTask(todoList);

// #region task creation form
  iconRotate('#btn-add');
  heightControl('#text-input');

  taskTextInput.addEventListener('input', () => {
    error.textContent = '';
    error.classList.remove('list__error--active');
  });
// #endregion

// #region task creation
  taskTextInput.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
      event.preventDefault();
        if(errorEmpty(error, taskTextInput)) { return;};

        taskCreation(todoList, taskTextInput);
        updateTodoList(todoList);
        displayTask(todoList);

        taskTextInput.value = '';
        taskTextInput.style.height = 'auto';
    }
  });

  btnAdd.addEventListener('click', (event) => {
    event.preventDefault();
      if(errorEmpty(error, taskTextInput)) { return;};

      taskCreation(todoList, taskTextInput);
      updateTodoList(todoList);
      displayTask(todoList);

      taskTextInput.value = '';
      taskTextInput.style.height = 'auto';
  });
// #endregion

// #region button clear all tasks
  btnClearAllTasks.addEventListener('click', () => {
    listTasks.classList.add('list__tasks--empty');
    listTasks.style.height = heightObserver('.list__tasks') + 'px';
    
    setTimeout(() => {
      listTasks.classList.remove('list__tasks--empty');
      listTasks.style.height = '0'; 

      listTasks.innerHTML = '';
      localStorage.removeItem('todoList');
      todoList.length = 0;
    }, 300)
    
    setTimeout(() => {
     listTasks.style.cssText = ''; 
    }, 600);
  });
// #endregion
