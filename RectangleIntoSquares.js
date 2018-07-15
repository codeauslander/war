const assertSimilar = require('assert');

// You will be given two dimensions

// a positive integer length (parameter named lng)
// a positive integer width (parameter named wdth)
// You will return an array or a string (depending on the language; Shell bash and Fortran return a string) with the size of each of the squares.

//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]
// Notes:
// lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth. (See kata, Square into Squares. Protect trees! http://www.codewars.com/kata/54eb33e5bc1a25440d000891 for this problem). When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing. Return {} with C++. In that case the returned structure of C will have its sz component equal to 0. Return the string "nil" with Bash and Fortran.

// You can see more examples in "RUN SAMPLE TESTS".


function sqInRect(lng, wdth,squares = []) {
  if (squares.length === 0 && lng === wdth) return null;
  if (wdth === 0) return squares;
  
  const min = lng > wdth ? wdth : lng;
  const max = lng < wdth ? wdth : lng;
  
  squares.push(min);
  lng = min;
  wdth = max - min;
  
  return sqInRect(lng,wdth,squares);
}


assertSimilar(sqInRect(5, 5), null)
assertSimilar(sqInRect(5, 3), [3, 2, 1, 1])
assertSimilar(sqInRect(3, 5), [3, 2, 1, 1])
assertSimilar(sqInRect(20, 14), [14, 6, 6, 2, 2, 2])