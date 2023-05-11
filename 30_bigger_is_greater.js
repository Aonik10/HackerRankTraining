/* https://www.hackerrank.com/challenges/bigger-is-greater/

psudocode:
w = "abcd" --> "abdc"
iterate w from right to left
if w[i] > w[i-1] swap & return w_modified
else return "no answer"

[d,k,h,c] --> [h,c,d,k]
[4,11,9,3] --> [9,3,4,11]

[4,5,2,8,5,7,9,3] --> [4,5,2,8,5,9,3,7]

[arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]; 

*/

function searchMinPosible(arr, x) {
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > x) {
            let letterFound = arr.splice(i, 1);
            return letterFound.concat(arr);
        }
    }
    return arr;
}

function swapElements(arr) {
    let i = arr.length - 1;
    while (i > 0) {
        if (arr[i] > arr[i - 1]) {
            let arrLeft = arr.slice(0, i - 1); // cut
            let arrRight = arr.slice(i - 1, arr.length);
            return arrLeft.concat(searchMinPosible(arrRight, arr[i - 1]));
        }
        i--;
    }
    return arr; // means that nothing changed
}

function biggerIsGreater(w) {
    // Write your code here
    let word = w.split("");
    let wordSwaped = swapElements(word);
    if (wordSwaped == word) return "no answer";
    return wordSwaped.join("");
}
