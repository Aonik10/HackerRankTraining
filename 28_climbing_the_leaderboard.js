/*
Description at: https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true


*/

function findPosition(score, scoreboard) {
    let i = 0;
    let j = scoreboard.length - 1;
    while (i <= j) {
        let middle = Math.floor((i + j) / 2);
        if (score < scoreboard[middle]) {
            i = middle + 1;
        } else if (score > scoreboard[middle]) {
            j = middle - 1;
        } else {
            return middle + 1;
        }
    }
    return i + 1;
}

// Need better performance
function climbingLeaderboard(ranked, player) {
    // Write your code here
    let playerRankings = [];
    let scoreboard = ranked.filter(
        (item, index) => ranked.indexOf(item) == index
    );
    for (let score of player) {
        playerRankings.push(findPosition(score, scoreboard));
    }
    return playerRankings;
}

ranked = [100, 100, 50, 40, 40, 20, 10];
player = [5, 25, 50, 120];

console.log(climbingLeaderboard(ranked, player));

console.log(climbingLeaderboard2(ranked, player));

// First naive solution

function climbingLeaderboard2(ranked, player) {
    // Write your code here
    let playerRankings = [];
    let scoreboard = ranked.filter(
        (item, index) => ranked.indexOf(item) == index
    );
    for (let score of player) {
        let i = 0;
        while (score < scoreboard[i]) {
            i++;
        }
        playerRankings.push(i + 1);
    }
    return playerRankings;
}
