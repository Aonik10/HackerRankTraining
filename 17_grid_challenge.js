/*
Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. 
Determine if the columns are also in ascending alphabetical order, top to bottom. 
Return YES if they are or NO if they are not.

Example

grid = ['abc', 'ade', 'efg']

The grid is illustrated below.

a b c
a d e
e f g

The rows are already in alphabetical order. The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES. 
Only elements within the same row can be rearranged. They cannot be moved to a different row.

Function Description

Complete the gridChallenge function in the editor below.
gridChallenge has the following parameter(s):

string grid[n]: an array of strings

Returns

string: either YES or NO

*/

function sortGrid(grid) {
    let newGrid = [];
    for (let element of grid) {
        let elementSorted = sortString(element);
        newGrid.push(elementSorted);
    }
    return newGrid;
}

function sortString(s) {
    let arraySorted = s
        .split("")
        .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    let stringSorted = arraySorted.join("");
    return stringSorted;
}

function gridChallenge(grid) {
    // Write your code here
    let sortedGrid = sortGrid(grid);
    let i = 0;
    while (i < grid.length) {
        let j = 0;
        let column = "";
        while (j < grid.length) {
            column += sortedGrid[j][i];
            j++;
        }
        if (column == sortString(column)) i++;
        else return "NO";
    }
    return "YES";
}

console.log(gridChallenge(["eabcd", "fghij", "olkmn", "trpqs", "xywuv"]));

/*
Constrains are beign incorrect, so i used this solution to keep going

function gridChallenge(grid) {
    let sizeI = grid.length;

    for (let i = 0; i < sizeI; i++) {
        grid[i] = grid[i].split("");
        grid[i].sort();
    }

    let sizeJ = grid[0].length;

    for (let i = 0; i < sizeI; i++) {
        for (let j = 0; j < sizeJ - 1; j++) {
            if (grid[j][i] > grid[j + 1][i]) {
                return "NO";
            }
        }
    }

    return "YES";
}

console.log(gridChallenge(["abc", "hjk", "mpq", "rtv"]));

*/
