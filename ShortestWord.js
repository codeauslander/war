const assertEquals = require('assert');

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// The function has two input variables:

// customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// The function should return an integer, the total time required.

// EDIT: A lot of people have been confused in the comments. To try to prevent any more confusion:

// There is only ONE queue, and
// The order of the queue NEVER changes, and
// Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// The diagram on the wiki page I linked to at the bottom of the description may be useful.
// So, for example:

// queueTime([5,3,4], 1)
// // should return 12
// // because when n=1, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// N.B. You should assume that all the test input will be valid, as specified above.

// P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool

function findMinMax(s){
  return s.split(' ').reduce((acc, val) => {
      acc[0] = ( acc[0] === undefined || val < acc[0] ) ? val : acc[0];
      acc[1] = ( acc[1] === undefined || val > acc[1] ) ? val : acc[1];
      return acc;
  }, []);
}

function findShort(s){
  return s.split(' ').reduce((acc, val) => {
      acc = ( acc === undefined || val.length < acc ) ? val.length : acc;
      return acc;
  }, undefined);
}

function findShortV2(s){
  return s.split(' ').reduce((initial, current) => current.length < initial ? current.length : initial ,Number.POSITIVE_INFINITY);
}

const text = 'String will never be empty and you do not need to account for different data types.';
console.log(findShort(text));


describe("example tests", function() {
  assertEquals(queueTime([], 1), 0);
  assertEquals(queueTime([1,2,3,4], 1), 10);
  assertEquals(queueTime([2,2,3,3,4,4], 2), 9);
  assertEquals(queueTime([1,2,3,4,5], 100), 5);
  //add some more example tests here, if you like
})