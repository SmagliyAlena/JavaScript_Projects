"use strict";
function add7(number) {
  let add7Result = number + 7;
  return add7Result;
}

function multiply(x,y) {
  let result = x+y;
  return result;
}

function capitalize(word){
  
  let firstLetter = word.toUpperCase()[0];
  let lastLetters = word.substr(1).toLowerCase();

  let newWord =  firstLetter + lastLetters;
  return newWord;
}
//console.log(capitalize('WIOREHJ dhfh'))

function lastLetter(word){
  let lastLetter = word.slice(-1);
  return lastLetter;
}
//console.log(lastLetter('abcd'))
