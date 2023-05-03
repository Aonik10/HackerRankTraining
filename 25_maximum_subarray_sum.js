/*

We define the following:

A subarray of array a of length n is a contiguous segment from a[i] through a[j] where 0 <= i <= j < n.
The sum of an array is the sum of its elements.
Given an n element array of integers, a, and an integer, m, determine the maximum value of the sum of any of its subarrays modulo m.

Example

a = [1,2,3]
m= 2

The following table lists all subarrays and their moduli:

		    sum	    %2
[1]		    1	    1
[2]		    2	    0
[3]		    3	    1
[1,2]		3	    1
[2,3]		5	    1
[1,2,3]		6	    0

The maximum modulus is 1.

Function Description

Complete the maximumSum function in the editor below.

maximumSum has the following parameter(s):

long a[n]: the array to analyze
long m: the modulo divisor
Returns
- long: the maximum (subarray sum modulo m)


[1,2,3,4,5] { 
    1: [
        [1,2,3,4,5],    [2,3,4]     [3]
        [1,2,3,4],      [2,3]       
        [1,2,3],        [2]         
        [1,2],          
        [1],            
    ],
    2: [
        [2,3,4,5],
        [2,3,4],
        [2,3],
        [2],
    ],
    3: [
        [3,4,5],
        [3,4],
        [3],
    ],
    4: [
        [4,5],
        [4],
    ],
    5: [
        [5]
    ]
}

*/

function maximumSum(a, m) {
    // Write your code here
    let sum = 0;
    let maxSum = 0;
    let i = 0;
    while (a.length != 0) {
        sum += a[i];
        if (sum % m > maxSum) maxSum = sum % m;
        i++;
        if (i > a.length) {
            a.shift();
            sum = 0;
            i = 0;
        }
    }
    return maxSum;
}

console.log(maximumSum([3, 3, 9, 9, 5], 7));

/*
function maximumSum(a, m) {
    // Write your code here
    let initialSum = a.reduce((sum, i) => (sum += i), 0);
    let arrSum = initialSum;
    let maxSum = arrSum % m;
    let i = 0;
    while (a.length != 0) {
        if (arrSum % m > maxSum) maxSum = arrSum % m;
        arrSum -= a[i];
        i++;
        if (i > a.length) {
            initialSum -= a.pop();
            arrSum = initialSum;
            i = 0;
        }
    }
    return maxSum;
}
*/
