/*
Description at: https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true


*/
function climbingLeaderboard(ranked, player) {
    // Write your code here
    let playerRankings = [];
    let currentRank = ranked.shift();
    let currentScore = player.pop();
    let i = 1;
    let j = 0;
    while (j < ranked.length || currentScore) {
        if (currentScore >= currentRank || j > ranked.length) {
            playerRankings.unshift(i);
            currentScore = player.pop();
            continue;
        }
        if (currentRank != ranked[j]) {
            currentRank = ranked[j];
            i++;
        }
        j++;
    }
    return playerRankings;
}

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
