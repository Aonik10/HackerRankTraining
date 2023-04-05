/*
There is a collection of input strings and a collection of query strings. For each query string, determine how many times it 
occurs in the list of input strings. Return an array of the results.

Example:

strings = ['ab', 'ab', 'abc']
queries = ['ab', 'abc', 'bc']

There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array,

result = [2, 1, 0]

Function Description

Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

matchingStrings has the following parameters:

string strings[n] - an array of strings to search
string queries[q] - an array of query strings

Returns

int[q]: an array of results for each query


PSEUDOCODE:
I have to search with every element of queries, how many matches i found in strings
*/

function matchingStrings(strings, queries) {
    // Write your code here
    let result = [];
    for (let element of queries) {
        result.push(strings.filter((string) => string == element).length);
    }
    return result;
}

let strings = ["aba", "baba", "aba", "xzxb"];
let queries = ["aba", "xzxb", "ab"];

console.log(matchingStrings(strings, queries));
