/*
Pseudo code,
i = 0 quien puede estar en la posicion de i = 0?
pues todos los i=0 o i=(row.length - 1 - i) de cada fila o columna
i = 1, quien puede estar en la posicion i = 1?
pues todos los i=1 o i=(row.length - 1 - i) de cada fila o columna

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
