/*
We define a magic square to be an n x n matrix of distinct positive integers from 1 to n**2 where
the sum of any row, column, or diagonal of length n is always equal to the same number: the magic constant.

You will be given a 3x3 matrix s of integers in the inclusive range [1.9]. We can convert any digit a to any other digit b in 
the range [1,9] at cost of |a-b|. Given s, convert it into a magic square at minimal cost. Print this cost on a new line.

Note: The resulting magic square must contain distinct integers in the inclusive range [1,9].

Example

$s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

The matrix looks like this:

    5 3 4
    1 5 8
    6 4 2

We can convert it to the following magic square:

    8 3 4
    1 5 9
    6 7 2

This took three replacements at a cost of |5-8| + |8-9| + |4-7| = 7.

Function Description

Complete the formingMagicSquare function in the editor below.

formingMagicSquare has the following parameter(s):

int s[3][3]: a 3x3 array of integers

Returns

int: the minimal total cost of converting the input square to a magic square

Pasos que encuentro:

el 5 deberia estar siempre en el medio del cuadrado
el array del medio deberia ser [1,5,9] o [9,5,1] o [3,5,7] o [7,5,3]

    8 3 4   
    1 5 9
    6 7 2

    8 1 6
    3 5 7
    4 9 2




hay 4 lados [8,3,4] , [8,1,6] , [6,7,2] , [2,9,4]
*/

function buildMagicSquares() {
    let squares = [];
    let orders = [
        [2, 7, 6, 1, 8, 3, 4, 9],
        [8, 1, 6, 7, 2, 9, 4, 3],
    ];
    let i = 0;
    let j = 0;
    for (let q of orders) {
        while (j < 4) {
            let square = [
                [q[i], q[i + 1], q[i + 2]],
                [q[i + 7], 5, q[i + 3]],
                [q[i + 6], q[i + 5], q[i + 4]],
            ];
            squares.push(square);
            let k = q.splice(6, 2);
            q = k.concat(q);
            j++;
        }
        j = 0;
    }
    return squares;
}

function compareSquares(first, second) {
    let i = 0;
    let j = 0;
    let sum = 0;
    while (i < 3) {
        while (j < 3) {
            sum += Math.abs(first[i][j] - second[i][j]);
            j++;
        }
        i++;
        j = 0;
    }
    return sum;
}

function formingMagicSquare(s) {
    // Write your code here
    let squares = buildMagicSquares();
    let min = Number.MAX_VALUE;
    for (let square of squares) {
        let counter = compareSquares(square, s);
        if (counter < min) min = counter;
    }
    return min;
}

/*
    2 7 6
    9 5 1 --> 1 + 3 + 1 + 2 + 5 + 5 + 3 + 1 + 6 = 27  mal tiene que dar 19
    4 3 8  

    2 9 4
    7 5 3 --> 1 + 8 + 1 + 1 + 5 + 5 + 6 + 1 = 28 X
    6 1 8

    6 1 8
    7 5 3 --> 1 + 1 + 1 + 1 + 8 + 1 + 1 + 3 + 2 = 19 !!!
    2 9 4
*/
