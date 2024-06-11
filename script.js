const friend = "BRUTUS";
const shiftValue = 3;

// step 1:
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// step 2:
let encryptedName = '';
// loops through every letter in friend
for (let i = 0; i < friend.length; i++){
    // gets current character 
    const currChar = friend[i];
    // finds current index in alphabet
    const currIndex = alphabet.indexOf(currChar.toLocaleLowerCase());
    // calculate the new index w the shift value 
    const newIndex = (currIndex + shiftValue) % alphabet.length;
    // get the new letter from the alphabet and converts it to uppercase
    encryptedName += alphabet[newIndex].toUpperCase();
}

// Question 1:
// loop cuts down time, it does the work for us iterating through each letter 

// Question 2:
// the % sign ensures that if we get to the end of the alphabet,
// iot wraps around to the beginining 