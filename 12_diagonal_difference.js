/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr  is shown below:

1   2   3
4   5   6
9   8   9

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

tip:
arr = array of arrays
we also know that there is an square matrix, so arr.length == arr[i].length
*/

function diagonalDifference(arr) {
    // Write your code here
    let i = 0;
    let n = arr.length;
    let firstDiagonal = 0;
    let reverseDiagonal = 0;
    while (i < n) {
        firstDiagonal += arr[i][i];
        reverseDiagonal += arr[i][n - 1 - i];
        i++;
    }
    return Math.abs(firstDiagonal - reverseDiagonal);
}
