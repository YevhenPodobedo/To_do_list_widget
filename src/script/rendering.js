'use strict';

import { editTask, removeTask } from "./activeButtons.js";
import { checkboxToggleActive, hideElement, textDecoration } from "./activeElement.js";
import { iconRotate, activeElementShortTime } from "./elementAnimation.js";
import { classToggle, opacity } from "./utils.js";
import { taskTemplate } from "./templates.js";
import { listTasks } from "./variables-dom.js";
import { todoList } from "./dataArray.js";

export function displayTask(object) {
  if(!object.length) {listTasks.innerHTML = ''; return;};

  let tasks = '';

  object.forEach((item) => {
    tasks += taskTemplate(item.id, 
                          item.task, 
                          (item.checked) ? 'checked' : '');


  });
  
  listTasks.innerHTML = tasks;
  renderingFunctionBlock();
};

function renderingFunctionBlock() {
  iconRotate('#btn-edit');
  iconRotate('#btn-remove');
  iconRotate('#clear-all-tasks');

  classToggle('.task__content', 'task--color');
  classToggle('.task__content', '.task__content', '--active');
  classToggle('.task__content', '.task__title', '--hidden');

  activeElementShortTime('.task__content', 'task');
  checkboxToggleActive('input[name="checkbox"]', '#btn-edit', 'hidden');
  hideElement('#btn-edit');

  textDecoration('.task__content', '--change');
  opacity('.list__tasks');

  editTask('#btn-edit', todoList);
  removeTask('#btn-remove', todoList);
};
