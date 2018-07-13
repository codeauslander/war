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