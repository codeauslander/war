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

function queueTime(customers, n) {
  let tils = [];
  let index = 0;
  while (index < n) {
    tils.push(0);
    index ++;
  }
  
  let indexCostumers = 0;
  const size = customers.length;
  while (indexCostumers < size) {
    const min = tils.reduce((acc,val)=> {
      return acc = (acc === undefined || val < acc) ? val : acc;
    });
    const position = tils.indexOf(min);
    tils[position] += customers[indexCostumers];
    indexCostumers ++;
  }
  return tils.reduce((acc,val)=> {
    return acc = (acc === undefined || val > acc) ? val : acc;
  });
}

function queueTimeV2(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}

describe("example tests", function() {
  assertEquals(queueTime([], 1), 0);
  assertEquals(queueTime([1,2,3,4], 1), 10);
  assertEquals(queueTime([2,2,3,3,4,4], 2), 9);
  assertEquals(queueTime([1,2,3,4,5], 100), 5);
//add some more example tests here, if you like
})