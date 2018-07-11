function getCount(str) {
  return str.replace(/\s/g,'').split(/[aeiou]/).length - 1;
}
console.log(getCount('asdfbeadsi'));