/*

Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

Example

a = [1,1,2,2,4,4,5,5,5]

There are two subarrays meeting the criterion: [1,1,2,2] and [4,4,5,5,5]. The maximum length subarray has 5 elements.

Function Description

Complete the pickingNumbers function in the editor below.

pickingNumbers has the following parameter(s):

int a[n]: an array of integers

Returns

int: the length of the longest subarray that meets the criterion

psudoCode
[1,2,2,3,5,8,6,1,3,2]

obj = {
    1: 2,
    2: 3,
    3: 2,
    5: 1,
    8: 1,
    6: 1
}

recorrer las keys del obj y sumar sus values hasta llegar al maximo

*/

function pickingNumbers(a) {
    // Write your code here
    let obj = {};
    for (let n of a) {
        if (obj.hasOwnProperty(n)) obj[n] += 1;
        else obj[n] = 1;
    }
    let sortedKeys = Object.keys(obj).sort((a, b) => a - b);
    let current = sortedKeys.shift();
    let currentLength = obj[current];
    let maxLength = currentLength;
    for (let key of sortedKeys) {
        if (Math.abs(key - current) == 1) {
            currentLength = obj[current] + obj[key];
        } else {
            currentLength = obj[key];
        }
        if (currentLength > maxLength) maxLength = currentLength;
        current = key;
    }
    return maxLength;
}
