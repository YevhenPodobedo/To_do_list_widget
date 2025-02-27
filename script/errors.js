'use strict';

export function errorEmpty(error, taskTextInput) {

  if(!taskTextInput.value.trim()) {
    error.textContent = 'Please create a task.';
    error.classList.add('list__error--active');
    return true;
  };
  
  return false;
};
