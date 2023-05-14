/*
https://www.hackerrank.com/challenges/the-grid-search/problem?isFullScreen=true

*/

function gridSearch(G, P) {
    // Write your code here
    let width = G[0].length - P[0].length;
    let grid = G.join("|");
    let pattern = P.join(`.{${width + 1}}`);
    let match = grid.match(pattern);
    if (match) return "YES";
    return "NO";
}
