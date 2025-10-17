/*
This is a collection of functions that demonstrate clean code and code quality through naming of functions in the right way ensuring linting and formatting for consistency
*/

// A function that returns an array consisting of the largest number from each sub-array.
largestOfAll = (arrayOfArrays) => {
    let largestOfAll = arrayOfArrays[0][0]; // initialize maxValue with the first item of first array
    for (array of arrayOfArrays) {
        for(item of array){
            if(item > largestOfAll) largestOfAll = item;
        }
    }
    return largestOfAll;
}

nestedArray = [[2, 5, 10], [3, 9, 8], [6, 1, 2], [3, 5, 21], [7, 7.5, 1.5], [9, 12, 20.9]]
console.log(largestOfAll(nestedArray));