// Find the Median of an unordered array of numbers

function findMedian(arr) {
    // Write your code here
    let sortedArr = arr.sort((a, b) => a - b);
    let medianIndex = Math.floor(sortedArr.length / 2);
    return arr[medianIndex];
}
