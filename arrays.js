var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
    
function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1);
=======
  const listMe = [1];
  return ['foo', ...listMe];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  const listMe = [1];
  listMe.unshift('foo');
  return listMe;
}
    
function addElementToEndOfArray(array, element) {
  const listMe = [1];
  return [...listMe, 'foo'];
}

function destructivelyAddElementToEndOfArray(array, element) {
  const listMe = [1];
  listMe.push('foo');
  return listMe;
}

function accessElementInArray(array, index) {
  var myCount = [1, 2, 3];
  return myCount[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  const myCount = [1, 2, 3];
  myCount.shift();
  return myCount;
}

function removeElementFromBeginningOfArray(array) {
  const myCount = [1, 2, 3];
  return myCount.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  const myCount = [1, 2, 3];
  myCount.pop();
  return myCount;
}

function removeElementFromEndOfArray(array) {
  const myCount = [1, 2, 3];
  return myCount.slice(0, myCount.length -1);
>>>>>>> 24e389c5425495a521ad0486ca3b3480f1a51c12
}

