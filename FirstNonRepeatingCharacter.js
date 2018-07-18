const assertEquals = require('assert');

// Write a function named firstNonRepeatingLetter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return the empty string ("").

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

function firstNonRepeatingLetter(s) {
  let result = '';
  let array = s.split('');
  let first = true;
  for (index = 0; index < array.length; index++) { 
    const letter = array[index];
    const upperLetter = letter.toUpperCase();
    const lowerLetter = letter.toLowerCase();
    
    array.splice(index,1);
    console.log(array);
    if (first && (array.indexOf(upperLetter) === -1 && array.indexOf(letter) === -1)) {
        
        result = letter;
        console.log(s,first,array.indexOf(upperLetter) === -1,array.indexOf(lowerLetter) === -1,result);
        first = false;
    }
    array.splice(index - 1,1,letter);
    console.log(array);
  };
  return result;
}


describe('Simple Tests', function() {
  it('should handle simple tests', function() {
    assertEquals(firstNonRepeatingLetter('a'), 'a');
    assertEquals(firstNonRepeatingLetter('stress'), 't');
    assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
  });
});