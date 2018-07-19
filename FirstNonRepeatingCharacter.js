const assertEquals = require('assert');

// Write a function named firstNonRepeatingLetter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return the empty string ("").

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

function firstNonRepeatingLetter(s) {
  const word = s.split('');
  let result = [];
  
  s = s.toLowerCase();
  const lowerCase = s.split('');
  
  for (let i = 0; i < lowerCase.length; i++){
    if (s.split(lowerCase[i]).length - 1 === 1) result.push(word[i]);
  }
  
  return result[0] || '';
}

function firstNonRepeatingLetterV2(s) {
  for (var i in s) {
    if (s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

describe('Simple Tests', function() {
  it('should handle simple tests', function() {
    assertEquals(firstNonRepeatingLetter('a'), 'a');
    assertEquals(firstNonRepeatingLetter('stress'), 't');
    assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
  });
});