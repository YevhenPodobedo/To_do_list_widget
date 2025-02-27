'use strict';

import { queryAll } from "./utils.js";
import { todoList } from "./dataArray.js";
import { updateTodoList } from "./localStorage.js";

export function checkboxToggleActive(checkbox) {
  queryAll(checkbox).forEach(check => {
    check.addEventListener('click', () => {

      todoList.forEach(item => {
        if(item.id === Number(check.id)) {
          item.checked = !item.checked;
        }
        updateTodoList(todoList);
      });
      
      textDecoration('.task__content', '--change');
      hideElement('#btn-edit');
    })
  })
};

 export function textDecoration(nameClass, newClass) {
  queryAll('input').forEach(checkbox => {
    const parental = checkbox.closest('LI');
    parental.querySelector(nameClass).classList.toggle(`${nameClass.slice(1)}${newClass}`, checkbox.checked);
  })
};

export function hideElement(nameItem) {
  queryAll('input').forEach(checkbox => {
    if(checkbox.checked) {
      checkbox.closest('LI').querySelector(nameItem).style.visibility = 'hidden';
    } else {
      checkbox.closest('LI').querySelector(nameItem).style.visibility = '';
    }
  })
};
