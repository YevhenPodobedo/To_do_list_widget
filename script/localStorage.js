'use strict';

export function getTodoList() {
  return JSON.parse(localStorage.getItem('todoList')) || [];
};

export function updateTodoList(update) {
  localStorage.setItem('todoList', JSON.stringify(update));
};
