/*
Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable, method, and class names.

Input Format

Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon
followed by the words you'll need to operate on.
The operation will either be S (split) or C (combine)
M indicates method, C indicates class, and V indicates variable
In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited
list of words starting with a lowercase letter.
In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine 
into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.
Output Format

For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate 
camel case string (in the case of a combine operation).

Sample Input

S;M;plasticCup()
C;V;mobile phone
C;C;coffee machine
S;C;LargeSoftwareBook
C;M;white sheet of paper
S;V;pictureFrame

Sample Output

plastic cup
mobilePhone
CoffeeMachine
large software book
whiteSheetOfPaper()
picture frame

Explanation

Use Scanner to read in all information as if it were coming from the keyboard.

Print all information to the console using standard output (System.out.print() or System.out.println()).

Outputs must be exact (exact spaces and casing).
*/

/*
Pseudocode:

i recive S or C for Split or Combine
then i recive M, C or V indicating Method, Class or Variable

need to start with a .split(";")

M -> append "()"
C -> starts with uppercase
V -> standar

split with capital letter should be -> split(/(? =[A-Z])/)
im going to need to save that letter before splitting, I can use a for loop to check every letter with its upperCase() version, the order shall be relevant (maybe using an array)

*/

function processData(input) {
    //Enter your code here
    for (let line of input.split("\r\n")) {
        let inputArr = line.split(";");
        let operation = inputArr[0]; // S or C
        let type = inputArr[1]; // M, C or V
        let workingText = inputArr[2];
        if (operation == "S") console.log(splitText(workingText));
        if (operation == "C") console.log(combineText(workingText, type));
    }
}

function splitText(workingText) {
    let newText = "";
    for (let i = 0; i < workingText.length; i++) {
        let letter = workingText[i];
        if (/[a-zA-Z]/.test(letter))
            if (letter === letter.toUpperCase() && i > 0) {
                // [..."holaComoEstas".matchAll(/[a-z]+|[A-Z][a-z]*/g)].map(s => s[0].toLowerCase()).join(" ")
                newText += " " + letter;
            } else {
                newText += letter;
            }
    }
    return newText.toLowerCase();
}

function combineText(workingText, type) {
    let words = workingText.split(" ");
    let combined = "";
    for (let word of words) {
        combined += word.substring(1, 0).toUpperCase() + word.substring(1);
    }
    switch (type) {
        case "V":
            return (
                combined.substring(1, 0).toLowerCase() + combined.substring(1)
            );
        case "M":
            return (
                combined.substring(1, 0).toLowerCase() +
                combined.substring(1) +
                "()"
            );
        default:
            return combined;
    }
}
