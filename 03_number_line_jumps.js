/*
You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive 
direction (i.e, toward positive infinity).

The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

Example

x1=2
v1=1
x2=1
v2=2

After one jump, they are both at x = 3, (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2), so the answer is YES.

Function Description

Complete the function kangaroo in the editor below.

kangaroo has the following parameter(s):

int x1, int v1: starting position and jump distance for kangaroo 1
int x2, int v2: starting position and jump distance for kangaroo 2
Returns

string: either YES or NO
Input Format

A single line of four space-separated integers denoting the respective values of x1, v1, x2 and v2.

Constraints

0 <= x1 < x2 <= 10000
1 <= v1 <= 10000
1 <= v2 <= 10000

*/

/*
Pseudocode

Consider a returning variable which is a string that is going to take two values, 'YES' or 'NO', 
depending of the values of x1+v1 and x2+v2;

5 + 2 = 7
3 + 3 = 6

7 + 2 = 9 here is going to be possible
6 + 3 = 9

9 + 2 = 11 they will never cross again with this values of v1 and v2
9 + 3 = 12

some cases to evaluate:
if x1 + v1 > x2 + v2 --> we need v2 > v1 --> if this happens, we can do a while loop to check if the sums are equal, and we can use 
                                             x1 + v1 < x2 + v2 as a breaking condition

if x1 + v1 < x2 + v2 --> we need v2 < v1 --> if this happens, we can do a while loop to check if the sums are equal, and we can use 
                                             x1 + v1 > x2 + v2 as a breaking condition

we have to check inside the loops if x1 + v1 == x2 + v2 in every iteration, if it ocurrs we must return "YES", if not, we return "NO"

Mario said:

if (v1 == v2) {
return x1 == x2 ? "YES" : "NO"
}
if ( v1 < v2 ) {
    swap v1 y v2 y swap x1 y x2
};

*/

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if (v2 == v1) {
        return x1 == x2 ? "YES" : "NO";
    }
    if (v2 > v1) [x1, v1, x2, v2] = [x2, v2, x1, v1]; // swap
    do {
        x1 += v1;
        x2 += v2;
        if (x1 == x2) return "YES";
    } while (x1 < x2);
    return "NO";
}
