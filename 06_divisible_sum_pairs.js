/*
Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

Function Description

Complete the divisibleSumPairs function in the editor below.

divisibleSumPairs has the following parameter(s):

int n: the length of array 
int ar[n]: an array of integers
int k: the integer divisor

*/

/*
Pseudocode:

first thoughts are about using a for loop with index "i" and other nested for loop with index "J"
I only need to check the pairs where i < j
I must check if (i, j) current pair of the loop i+j%k==0

*/

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let counter = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k == 0) counter++;
        }
    }
    return counter;
}
