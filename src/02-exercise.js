import { exercise02Task } from './main';

/**
 * Execute the `exercise02Task` function and provide
 * a callback function that receives a `result` parameter
 *
 * The callback function should append a `p` element
 * with the text content from the `result` parameter
 * and a class name of `exercise-02`
 *
 * The `p` element should be appended as the child of
 * the `.ex-container` div element
 */
 function exercise02() {
  // Complete the code of the function
  exercise02Task(function (result) {
    let elementInDom = document.querySelector('.ex-container')
    let element = document.createElement('p')
    element.textContent = result
    element.classList.add('exercise-02')
    elementInDom.append(element)
  })
}

export default exercise02;
