/*
Sean invented a game involving a 2n x 2n matrix where each cell of the matrix contains an integer. He
can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum
of the elements in the n x n submatrix located in the upper-left quadrant of the matrix.
Given the initial configurations for Q matrices, help Sean reverse the rows and columns of each matrix in the
best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.

Function Description

Complete the flippingMatrix function in the editor below.
flippingMatrix has the following parameters:
- int matrix[2n][2n]: a 2-dimensional array of integers


Return:

- int: the maximum sum possible.

*/

function flippingMatrix(matrix) {
    // Write your code here
    let i = 0;
    let n = matrix.length;
    let maxSum = 0;
    while (i < n / 2) {
        let j = 0;
        while (j < n / 2) {
            maxSum += Math.max(
                matrix[i][j],
                matrix[i][n - 1 - j],
                matrix[n - 1 - i][j],
                matrix[n - 1 - i][n - 1 - j]
            );
            j++;
        }
        i++;
    }
    return maxSum;
}
