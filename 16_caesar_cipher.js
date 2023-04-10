/*
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. 
If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

Function Description

Complete the caesarCipher function in the editor below.

caesarCipher has the following parameter(s):

string s: cleartext
int k: the alphabet rotation factor
Returns

string: the encrypted string

*/

function caesarCipher(s, k) {
    // Write your code here
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    while (k > alphabet.length) {
        k -= alphabet.length;
    }
    let cipher = alphabet.slice(k, alphabet.length) + alphabet.slice(0, k);
    let encryptedString = "";
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        let letterLowerCase = letter.toLowerCase();
        let letterUpperCase = letter.toUpperCase();
        if (cipher.includes(letterLowerCase)) {
            if (letter === letterUpperCase) {
                encryptedString +=
                    cipher[alphabet.indexOf(letterLowerCase)].toUpperCase();
            } else {
                encryptedString += cipher[alphabet.indexOf(letter)];
            }
        } else {
            encryptedString += letter;
        }
    }
    return encryptedString;
}
