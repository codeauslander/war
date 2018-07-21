const assertEquals = require('assert');

function solution(input, markers){
  let text = input.split('\n');
  for (let i in markers) {
    for (let j in text) {
      if (text[j].includes(markers[i])) {
        text[j] = text[j].substring(0, text[j].indexOf(markers[i])).trim();
      }
    }
  }
  return text.join('\n');
}

// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

describe("Solution", function(){
  it("should test for something", function(){
    const result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
    assertEquals(result, "apples, pears\ngrapes\nbananas", "Example");
  
  });
});