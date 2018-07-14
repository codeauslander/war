function toCamelCase(str){
  if (str.trim === '') return str
  let words = str.split(/_|-/).map((word)=>{ 
    return word.charAt(0).toUpperCase() + word.slice(1)
  });
  if (str[0] !== words[0][0]){
    words[0] = words[0].charAt(0).toLowerCase() + words[0].slice(1)
  }
  return words.join('');
}