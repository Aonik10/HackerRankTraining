/*
https://www.hackerrank.com/challenges/the-grid-search/problem?isFullScreen=true

psudocode

grid (G) & pattern (P) --> Array of Strings

iterate G
if G[i].split(P[j]) --> [P[j], P[j], P[j]]

*/

function gridSearch(G, P) {
    // Write your code here
    let width = G[0].length - P[0].length;
    let grid = G.join("");
    let pattern = P.join(`.{${width}}`);
    let match = grid.match(pattern);
    if (match) return "YES";
    return "NO";
}

/*

function gridSearch(G, P) {
    // Write your code here
    let i = 0;
    let j = 0;
    let startIndex = 0;
    let endIndex = G[i].length;
    while (i < G.length) {
        while (G[i + j].substring(startIndex, endIndex).includes(P[j])) {
            startIndex = G[i + j].indexOf(P[j]);
            endIndex = G[i + j].length - startIndex;
            j++;
            if (j == P.length) return "YES";
        }
        i++;
        j = 0;
        startIndex = 0;
        endIndex = G[i].length;
    }
    return "NO";
}

function gridSearch(G, P) {
    // Write your code here
    let gridRowSize = G[0].length;
    let patternSize = P[0].length;
    let jump = gridRowSize - patternSize;
    let grid = G.join("");
    let i = 0;
    let j = 0;
    for (let h = 0; h < grid.length; h++) {
        if (grid[h] == P[i][j]) {
            j++;
            if (j == patternSize) {
                i++;
                let start = h + 1 + jump;
                let end = start + patternSize;
                while (grid.substring(start, end) == P[i]) {
                    i++;
                    start = end + jump;
                    end = start + patternSize;
                    if (i == P.length) return "YES";
                }
            }
        } else {
            i = 0;
            j = 0;
        }
    }
    return "NO";
}


*/
