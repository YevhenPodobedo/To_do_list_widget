'use strict';

export function query(name) {
  return document.querySelector(name);
};

export function queryAll(name) {
  return document.querySelectorAll(name);
};

export function opacity(name) {

  queryAll(name).forEach(elem => {

    setTimeout(() => {
      elem.lastElementChild.style.opacity = '1';
    }, 200)
  })
};

export function heightControl(name) {
  query(name).addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  })
};

export function heightObserver(name) {
 return query(name).offsetHeight;
};

export function automaticHeightAdjustment(name) {
  name.style.height = 'auto';
  name.style.height = `${name.scrollHeight}px`;
};

export function classToggle(activatorName, nameClass, newClass, newDefaultClass = '--active-edit') {
  queryAll(activatorName).forEach(item => {
    item.addEventListener('click', () => {
      const parental = item.parentElement;
      const parentalNameClass = parental.classList[0];
      let element = parental;

      if(newClass) {
        element = parental.querySelector(nameClass);
      } 
      
      if(!parental.classList.contains(`${parentalNameClass}${newDefaultClass}`)) {
        element.classList.toggle(`${(newClass) ? nameClass.slice(1) : nameClass}${(newClass) ? newClass : ''}`);
      }
    })
  });
};

export function assignmentID(item) {
  return item.reduce((sumIndex, task) => Math.max(sumIndex, task.id), 0) + 1;
};
