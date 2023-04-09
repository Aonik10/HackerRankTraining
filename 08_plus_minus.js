/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. 
The test cases are scaled to six decimal places, though answers with absolute error of up to 10**4 are acceptable.
*/

function plusMinus(arr) {
    // Write your code here
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    for (let number of arr) {
        if (number > 0) positives++;
        else if (number < 0) negatives++;
        else zeros++;
    }
    console.log((positives / arr.length).toFixed(5));
    console.log((negatives / arr.length).toFixed(5));
    console.log((zeros / arr.length).toFixed(5));
}

function plusMinus(arr) {
    // Write your code here
    let positives = arr.filter((number) => number > 0).length;
    let negatives = arr.filter((number) => number < 0).length;
    let zeros = arr.filter((number) => number == 0).length;
    console.log((positives / arr.length).toFixed(5));
    console.log((negatives / arr.length).toFixed(5));
    console.log((zeros / arr.length).toFixed(5));
}
