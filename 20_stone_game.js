/*
Alice and Bob are playing the game of Nim with n piles of stones with sizes p0, p1, ... , p(n-1). 
If Alice plays first, she loses if and only if the 'xor sum' (or 'Nim sum') of the piles is zero,
i.e., p0 + p1 + ... + p(n-1) = 0.

Since Bob already knows who will win (assuming optimal play), 
he decides to cheat by removing some stones in some piles before the game starts. 
However, to reduce the risk of suspicion, he must keep at least one pile unchanged. 

Your task is to count the number of ways Bob can remove the stones to force Alice into losing the game. 
Since the number can be very large, output the number of ways modulo 10**9 + 7. 
Assume that both players will try to optimize their strategy and try to win the game.

Input Format

The first line of the input contains an integer n denoting the number of piles. 
The next line contains n space-separated integers p0, p1, ... , p(n-1) indicating the sizes of the stone piles.

Output Format

Print a single integer denoting the number of ways Bob can force Alice to lose the game, modulo 10**9 - 7.
*/

/*
pseudo code

array -> vamos a dejar fijo un elemento y vamos a modificar el resto de los valores restandole 1 a cada elemento para ver todas los combinaciones posibles

stoneGame([1,2,3,4,5,6], 0) =
    1 stoneGame([2,3,4,5,6], 1)
        2 stoneGame([3,4,5,6], 2)
            3 stoneGame([4,5,6], 3)
                4 stoneGame([5,6], 4)
                    5 stoneGame([6], 5)
                        6 stoneGame([], 6)
                        5 stoneGame([])
                        4 stoneGame([])
                        3 stoneGame([])
                        2 stoneGame([])
                        1 stoneGame([])
                        0 stoneGame([])
            2 stoneGame([4,5,6])
            1 stoneGame([4,5,6])
            0 stoneGame([4,5,6])
        1 stoneGame([3,4,5,6])
        0 stoneGame([3,4,5,6])
    0 stoneGame([2,3,4,5,6])
        2 stoneGame([3,4,5,6])
        1 stoneGame([3,4,5,6])
        0 stoneGame([3,4,5,6])



*/

function combinacionesDeP(p, j = 0, k = 0) {
    let combinaciones = [];
    if (p.length == 0) return [];
    if (p.length == 1) {
        for (let i = 0; i <= p[0]; i++) {
            combinaciones.push([i]);
        }
        return combinaciones;
    }
    let head = p.shift(); // p.splice(0, 1) equivalente
    for (let i = 0; i <= head; i++) {
        if (j == k) i = head;
        for (let element of combinacionesDeP([...p], j++, k)) {
            combinaciones.push([i].concat(element));
        }
    }
    return combinaciones;
}

function stoneGame(p) {
    // Write your code here
    // [3,4,5,6]
    let counter = 0;
    for (k = 0; k < p.length; k++) {
        console.log(combinacionesDeP([...p], 0, k));
        for (let lista of combinacionesDeP([...p], 0, k)) {
            if (lista.reduce((stone, total) => total ^ stone, 0) == 0)
                counter++;
        }
    }
    return counter;
}

console.log(stoneGame([1, 2, 3]));
