/*
This is a collection of functions that demonstrate clean code and code quality through naming of functions in the right way ensuring linting and formatting for consistency
*/

// A function that returns an array consisting of the largest number from each sub-array.
const largestOfAll = (arrayOfArrays) => {
  let arrayOfLargestMembers = []; // initialize the array tha carries largest value from each sub-array
  for (let array of arrayOfArrays) {
    let largestMember = array[0]; // Initialize largest member with the first element of sub-array
    for (let item of array) {
      if (item > largestMember) {
        largestMember = item;
      }
    }
    arrayOfLargestMembers.push(largestMember);
  }
  return arrayOfLargestMembers;
};

// Testing the function
let nestedArray = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
nestedArray = [
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
nestedArray = [
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1],
];
nestedArray = [
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
];
// console.log(largestOfAll(nestedArray));

/* A function to implement the slice and splice algorithm. It copies the arrayA into arrayB  starting from the index stated*/
const frakenSplice = (arrayA, arrayB, index) => {
  let arrayACopy = [...arrayA];
  let arrayBCopy = [...arrayB];
  let catchElementsBeforeIndex = [];
  let catchElementsAfterIndex = [];
  for (let i = 0; i < arrayBCopy.length; i++) {
    if (i >= index) {
      catchElementsAfterIndex.push(arrayBCopy[i]);
    } else {
      catchElementsBeforeIndex.push(arrayBCopy[i]);
    }
  }

  for (let item of arrayACopy) catchElementsBeforeIndex.push(item);
  for (let item of catchElementsAfterIndex) catchElementsBeforeIndex.push(item);
  return catchElementsBeforeIndex;
};

let arrayA = [1, 2, 3, 4];
let arrayB = [3, 5];
index = 1;
result = frakenSplice(arrayA, arrayB, index);
console.log(result);
