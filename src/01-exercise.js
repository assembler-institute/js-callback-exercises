import { exercise01Task } from './main';

/**
 * Execute the `exercise01Task` function and provide
 * a callback function that appends a `p` element
 * with the text content of `exercise-01 is done`
 * and a class name of `exercise-01`
 *
 * The `p` element should be appended as the child of
 * the `.ex-container` div element
 */
function exercise01() {
  // Complete the code of the function
  exercise01Task(function () {
    let elementInDom = document.querySelector('.ex-container')
    let element = document.createElement('p')
    element.textContent = 'exercise-01 is done'
    element.classList.add('exercise-01')
    elementInDom.append(element)
  });
}

export default exercise01;
