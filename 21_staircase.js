/*
Staircase detail

This is a staircase of size n=4:

   #
  ##
 ###
####

Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.

*/

function staircase(n) {
    // Write your code here
    let i = n + 1;
    while (n > 0) {
        let stair = " ".repeat(n - 1) + "#".repeat(i - n);
        console.log(stair);
        n -= 1;
    }
}

staircase(6);
