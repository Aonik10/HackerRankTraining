/*
Given an array of integers and a target value, determine the number of pairs of array elements that have a difference equal to the target value.

Example

k = 1
arr = [1,2,3,4]

There are three values that differ by k = 1: 2-1 = 1,3-2 = 1, and 4-3 = 1. Return 3.

Function Description

Complete the pairs function below.

pairs has the following parameter(s):

int k: an integer, the target difference
int arr[n]: an array of integers

Returns

int: the number of pairs that satisfy the criterion

Constraints

2 <= n <= 10**5
0 < k < 10**9
0 < arr[i] < 2**31-1
each integer arr[i] will be unique
*/

function pairs(k, arr) {
    // Write your code here
    let counter = 0;
    let i = 0;
    let j = 1;
    let arrSorted = arr.sort((a, b) => a - b);
    while (i < arrSorted.length) {
        if (arrSorted[j] - arrSorted[i] <= k) {
            if (arrSorted[j] - arrSorted[i] == k) counter++;
            j++;
        } else {
            i++;
            j = i + 1;
        }
    }
    return counter;
}
