// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    // Write your code here
    let obj = {};
    for (let n of a) {
        if (obj.hasOwnProperty(n)) obj[n]++;
        else obj[n] = 1;
    }
    return Object.keys(obj).find((key) => obj[key] === 1);
}
