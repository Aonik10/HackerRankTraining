/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.*/

function miniMaxSum(arr) {
    // Write your code here
    let min = Math.min.apply(Math, arr);
    let max = Math.max.apply(Math, arr);
    let totalSum = arr.reduce((a, b) => a + b, 0);
    console.log(totalSum - max, totalSum - min);
}
