const assertEquals = require('assert');

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

function likes(names) {
  // TODO
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  
}


// function likes_V2(peopleNames) {
//   var feels = new FeelingsParty('like', 'this');
//   for(var name in peopleNames) feels.addFeeler(new Person(peopleNames[name]));
//   return feels.shareTheseFeelings();

// }

// function Person(name) {
//  this.name = name;
// }

// Person.prototype.getName = function() {
//   return this.name;
// }

// function FeelingsParty(emotion, target) {
//  this.emotionalContext = emotion;
//  this.emotionalSubject = target;
//  this.peopleFeelingThisWay = [];
//  this.numPeopleFeelingThisWay = 0;
// }

// FeelingsParty.prototype.getEmotionalContext = function() {
//  return this.type;
// }

// FeelingsParty.prototype.addFeeler = function(person) {
//     this.numPeopleFeelingThisWay++;
//     this.peopleFeelingThisWay.push(person);
// }

// FeelingsParty.prototype.shareTheseFeelings = function() {
//     this.findTheRightWords();
//     if(this.numPeopleFeelingThisWay == 0) return 'no one ' + this.emotionalContext + ' ' + this.emotionalSubject;
//     if(this.numPeopleFeelingThisWay == 1) return '' + this.peopleFeelingThisWay[0].getName() + ' ' + this.emotionalContext + ' ' + this.emotionalSubject;
//     if(this.numPeopleFeelingThisWay == 2) return '' + this.peopleFeelingThisWay[0].getName() + ' and ' + this.peopleFeelingThisWay[1].getName() + ' ' + this.emotionalContext +  ' ' + this.emotionalSubject;
//     if(this.numPeopleFeelingThisWay == 3) return '' + this.peopleFeelingThisWay[0].getName() + ', ' + this.peopleFeelingThisWay[1].getName() + ' and ' + this.peopleFeelingThisWay[2].getName() + ' ' + this.emotionalContext +  ' ' + this.emotionalSubject;
//     return '' + this.peopleFeelingThisWay[0].getName() + ', ' + this.peopleFeelingThisWay[1].getName() + ' and ' + (this.numPeopleFeelingThisWay - 2) + ' others ' + this.emotionalContext + ' ' + this.emotionalSubject;
// }

// FeelingsParty.prototype.findTheRightWords = function() {
//     if(this.numPeopleFeelingThisWay == 0 || this.numPeopleFeelingThisWay == 1) this.emotionalContext += 's';
// }



describe('example tests', function() {
  it('should return correct text', function() {
    assertEquals(likes([]), 'no one likes this');
    assertEquals(likes(['Peter']), 'Peter likes this');
    assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});

