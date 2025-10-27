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
  for (let i = 0; i < arrayBCopy.length; i++)
    if (i >= index) catchElementsAfterIndex.push(arrayBCopy[i]);
    else catchElementsBeforeIndex.push(arrayBCopy[i]);
  for (let item of arrayACopy) catchElementsBeforeIndex.push(item);
  for (let item of catchElementsAfterIndex) catchElementsBeforeIndex.push(item);
  console.log({ "first array": arrayA, "second array": arrayB });
  return catchElementsBeforeIndex;
};
/* Testing
let arrayA = [1, 2, 3, 4];
let arrayB = [];
let index = 0;
let result = frakenSplice(arrayA, arrayB, index);
console.log(result);
*/
/* 
Building a function that looks through an array and returns the first element that passes a test function known as the truth test.
The function would iterate through the array and test each element using the provided test function. At the end, it would return the first element where the test function returns `true`
Example:

findElement([1, 3, 5, 8], num => num % 2 === 0) // returns 8
findElement([1, 3, 5], num => num % 2 === 0)    // returns undefined
*/

const findEvenNumber = (item) => {
  return item % 2 === 0;
};

const findLargerThanTwo = (item) => {
  return item > 2;
};

const findItemWithMoreThan5Characters = (item) => {
  return item.length > 5;
};

const findItemWithMoreThan10Characters = (item) => {
  return item.length > 10;
};

const findEmptyArray = (item) => {
  return item.length === 0;
};

const findElement = (anArray, func) => {
  for (let item of anArray) {
    if (func(item)) return item;
  }
  return undefined;
};

/* Testing
let func = findEvenNumber;
let array = [7, 8, 9, 1, 5];
let output = findElement(array, func);
console.log("");
console.log("");
console.log("");
console.log("====== First Element Finder ====== ");
console.log(output);
*/

/*
Building a pyramid generator
Objective here is to create a function named pyramid that takes three arguments.
First argument is a string representing the pattern character to repeat in the
pyramid. Second argument is an integer representing the no. of rows in the pyramid.
Third argument is a boolean value
The pyramid function returns a string in which the pattern character is repeated
and arranged to forma pyramid having the vertex facing upwards when the third argument is false and downwards otherwise
Each row of vertex has 2 characters more than the previous
Each row starts with a number of spaces sufficient to put the center character of each row in the same column and no spaces at the end of each row.
The pyramid should start and end with a newline character.
 */

const pyramid = (pattern, nrows, isVertexFacingDownwards) => {
  let catchRowContent = [];
  let rowContent = pattern;
  for (let i = 0; i < nrows; i++) {
    catchRowContent.push(rowContent);
    rowContent += pattern.repeat(2);
  }

  let maxRowSpace = rowContent.length-2;
  let requiredContent = [];
  for (let item of catchRowContent) {
    let newItem = " ".repeat((maxRowSpace-1)/2) + item + " ".repeat((maxRowSpace-1)/2)
    requiredContent.push(newItem);
    maxRowSpace -= 2;
  }
  console.log(requiredContent);
  let example = "\n   o\n  ooo\n ooooo\nooooooo\n";
  console.log(example.split("\n"))

  // create the pyramid facing up or down
  if (isVertexFacingDownwards) requiredContent = requiredContent.reverse() // only when vertex must face downwards
  
  let pyramidStructure = requiredContent.join("\n");
  return pyramidStructure;
};

/* Testing 
pattern = "o";
nrows = 4;
isVertexFacingDownwards = false;
console.log("");
console.log("");
console.log("");
console.log("============== Pyramid ====================");
console.log(pyramid(pattern, nrows, isVertexFacingDownwards));
*/


// Building a Gradebook App
// First create a function that gets average of test scores
const getAverage = (testScoresArray) => {
  let AverageScore = 0;
  for (let testScore of testScoresArray) AverageScore += testScore;
  return AverageScore / testScoresArray.length;
}

// Next, create a function that takes a students score as a parameter and returns the grade.
/*
Score Range	Grade
100	"A+"
90 - 99	"A"
80 - 89	"B"
70 - 79	"C"
60 - 69	"D"
0 - 59	"F"
*/

const getGrade = (studentScore) => {
  if (studentScore === 100) return "A+";
  if (studentScore < 100 && studentScore >= 90) return "A";
  if (studentScore < 90 && studentScore >= 80) return "B";
  if (studentScore < 80 && studentScore >= 70) return "C";
  if (studentScore < 70 && studentScore >= 60) return "D";
  return "F";
}

// Another function that checks if a student has passed. Any grade other than F passes
const hasPassingGrade = (studentScore) => {
  const grade = getGrade(studentScore);
  return grade !== "F";

}

// A function that returns a message from an array of scores and a student score.
const studentMsg = (studentScores, studentScore) => {
  const averageScore = getAverage(studentScores);
  const studentGrade = getGrade(studentScore);
  if (hasPassingGrade(studentScore)) return `Class average: ${averageScore}. Your grade: ${studentGrade}. You passed the course.`
  return  `Class average: ${averageScore}. Your grade: ${studentGrade}. You failed the course.`
}


