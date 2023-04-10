/*
Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be
removed to make the string a palindrome. There may be more than one solution, but any will do. If the word
is already a palindrome or there is no solution, return -1. Otherwise, return the index of a character to remove

Function Description

Complete the palindromeIndex function in the editor below.

palindromeIndex has the following parameter(s):
    string s: a string to analyze

Returns
    int: the index of the character to remove or -1

Input Format

The first line contains an integer q, the number of queries.
Each of the next q lines contains a query string s.

Constraints:

1 <= q <= 20
1 <= length of s <= 10**5 + 5
All characters are in the range asci[a-z]

Sample input

STDIN Function
----- --------
3 q = 3
aaab s = 'aaab' (first query)
baa s = 'baa' (second query)
aaa s = 'aaa' (third query)

Sample output

3
0
-1

*/

function isPalindrome(s) {
    let reversed = s.split("").reverse().join("");
    return s == reversed;
}

function palindromeIndex(s) {
    // Write your code here
    if (isPalindrome(s)) return -1;
    for (let i = 0; i < s.length; i++) {
        let newString = s.substring(0, i) + s.substring(i + 1);
        if (isPalindrome(newString)) return i;
    }
    return -1;
}
