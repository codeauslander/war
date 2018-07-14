const assertEquals = require('assert');
// let describe = mocha.describe;
// let it = mocha.it;


describe("findNextSquare", function() {
  it("should return the next square for perfect squares", function() {
    assertEquals(findNextSquare(121), 144, "Wrong output for 121");
    assertEquals(findNextSquare(625), 676, "Wrong output for 625");
    assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
    assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
  });
  
  it("should return -1 for numbers which aren't perfect squares", function() {
    assertEquals(findNextSquare(155), -1, "Wrong output for 155");
    assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627");
  });
});

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

function findNextSquare(sq) {
  let root = Math.sqrt(sq)
  if ( root % 1 === 0) return Math.pow(root + 1,2);
  return -1;
}

