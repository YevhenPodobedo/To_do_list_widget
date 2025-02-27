'use strict';

import { queryAll } from "./utils.js";

export function iconRotate(name) {
  
  queryAll(name).forEach(elem => {
    elem.addEventListener('click', () => {
      elem.classList.add('active-icon');

    setTimeout(() => {
      elem.classList.remove('active-icon');
    }, 1000);
    })
  })
};

export function activeElementShortTime(activatorName, nameClass, time = 300) {
  
  queryAll(activatorName).forEach(elem => {
    elem.addEventListener('click', () => {
      const parental = elem.parentElement;

      if(parental.classList.contains('task--active-edit')) { return;}
      
      parental.classList.add(`${nameClass}--active`);

      setTimeout(() => {
        parental.classList.remove(`${nameClass}--active`);
      }, time);
    });
  });
};