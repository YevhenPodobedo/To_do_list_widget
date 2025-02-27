'use strict';

export function taskTemplate(index, task, checked) {

  return  `<li class="task" id="${index}">
              <div class="task__checkbox">
                <label>
                  <input type="checkbox" name="checkbox" id="${index}" ${checked}>
                  <span></span>
                </label>
              </div>

              <div class="task__content">

                <h1 class="task__title">
                  Task 
                  <span id="task-number">${index}</span>
                </h1>

                <p class="task__text">${task}</p>
                
              </div>
                
              <div class="task__navigaion">
                <button type="button" id="btn-save"></button>
                <button type="button" id="btn-edit"></button>
                <button type="reset" id="btn-remove"></button>
              </div>
          </li>`;
};
