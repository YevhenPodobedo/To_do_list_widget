'use strict';

import { assignmentID, automaticHeightAdjustment, heightControl } from "./utils.js";

export function taskCreation(todoList, taskTextInput) {
  const newTask = {
    id: assignmentID(todoList),
    task: taskTextInput.value,
    checked: false,
    edit: false,
  };
  
  todoList.push(newTask);
};

export function createEdit(text) {
  const textarea = document.createElement('textarea');

  textarea.className = 'task__text';
  textarea.id = 'task-text';
  textarea.value = text.task;

  setTimeout(() => {
    automaticHeightAdjustment(textarea);
    heightControl('#task-text');
    textarea.focus();
  }, 10);
  
  return textarea;
};
