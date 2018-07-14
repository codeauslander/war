const assertEquals = require('assert');

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1

function findNb(m) {
    // your code
    let volume = 0
    let index = 1
    while (m > volume){
      volume += Math.pow(index,3);
      if (m === volume) return index;
      index ++;
    }
    return (-1);
}
console.log(
  findNb(4183059834009)
);

describe("Basic tests",function() {
  assertEquals(findNb(4183059834009), 2022)
  assertEquals(findNb(24723578342962), -1)
  assertEquals(findNb(135440716410000), 4824)
  assertEquals(findNb(40539911473216), 3568)
})

