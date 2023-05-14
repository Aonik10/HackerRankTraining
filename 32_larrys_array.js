/*
https://www.hackerrank.com/challenges/larrys-array/problem?isFullScreen=true
*/

function larrysArray(A) {
    // Write your code here
    let count = 0;
    let i = 0;
    while (i < A.length) {
        let j = i + 1;
        while (j < A.length) {
            if (A[i] > A[j]) count++;
            j++;
        }
        i++;
    }
    return count % 2 == 0 ? "YES" : "NO";
}
