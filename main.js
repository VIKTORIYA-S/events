'use strict';

alert('Если нужно получить textarea используйте комбинацию клавиш Ctrl + Shift + E, если нужно сохранить используйте Ctrl + Shift + S');


const box = document.querySelector('.box');
// const textarea = document.querySelector('.box');

function handler(event) {
if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'e') {
    event.preventDefault();
    console.log('Ctrl + E нажата!');
const textarea = document.createElement('textarea');
textarea.textContent = box.textContent;
textarea.classList = box.classList;

box.replaceWith(textarea);
  }}



function handler_2(event) {
  const textarea = document.querySelector('textarea');

  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 's') {
    event.preventDefault();
    console.log('Ctrl + S нажата!');
const box = document.createElement('box');
box.textContent = textarea.value;
box.classList = textarea.classList;

textarea.replaceWith(box);
  }
}


document.addEventListener('keydown', function (event) {

  handler(event);
});

document.addEventListener('keydown', function (event) {

  handler_2(event)
});



// //////////////////////////////////////////////////////////////
const headerCol1 = document.querySelector('#th_col-1');

headerCol1.addEventListener('click', () => {

  const colCells = document.querySelectorAll('.th_1');
  console.log(colCells);
console.log(Array.from(colCells));

const values = Array.from(colCells).map(cell => cell.textContent.trim());
    console.log(values);

  values.sort((a, b) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }
    return a.localeCompare(b, 'uk');
  });


  colCells.forEach((cell, i) => {
    cell.innerText = values[i];
  });
});


