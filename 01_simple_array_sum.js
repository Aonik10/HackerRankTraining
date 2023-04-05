/* 
Given an array of integers, find the sum of its elements.

For example, if the array ar = [1,2,3], 1 + 2 + 3 = 6, so return 6.

Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

ar: an array of integers
*/

function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    for (let number of ar) {
        sum += number;
    }
    return sum;
}
