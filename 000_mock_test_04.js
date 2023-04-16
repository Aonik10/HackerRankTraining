/*

*/

function simulateTour(petrolpumps, index) {
    let startingPoint = petrolpumps[index][0] - petrolpumps[index][1];
    if (startingPoint < 0) return false;
    let i = 1;
    while (i <= petrolpumps.length) {
        index += 1;
        if (index == petrolpumps.length) index = 0;
        startingPoint += petrolpumps[index][0] - petrolpumps[index][1];
        if (startingPoint < 0) return false;
        i++;
    }
    return true;
}

function truckTour(petrolpumps) {
    // Write your code here
    let i = 0;
    while (i < petrolpumps.length) {
        if (simulateTour(petrolpumps, i)) return i;
        i++;
    }
}

let tour = [
    [1, 5],
    [10, 3],
    [3, 4],
    [10, 3],
];

console.log(truckTour(tour));
