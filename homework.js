// Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// This will return "My name is Keith", as name is a global variable

// -------------------------------------------

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// This will return 3, as the global variable 5 is overridden to 3 inside the result function. If you ran console.log(score) it would still give you 5.

// -------------------------------------------

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i = 0; i < myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// This will loop through the animals and return something like:
// 0. Ducks
// 1. Dogs
// 2. Lions

// If you wanted the numbering to be correct, you'd change var i = 0 to var i = 1.

// -------------------------------------------

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// This will return:
// Suspects include Jay, Val, Harvey, Rick" as the allSuspects function overrides suspectThree from Keith to Harvey.
// The last console log will return "Suspect three is Keith", since the over riding is contained only within the scope of the allSuspects() function.

// -------------------------------------------

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// This will return the "Poirot" since we set the name of the detective that as pass into the printName function as "Poirot".

// -------------------------------------------

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// The last console log will return "the murderer is rick". The call on outerFunction doesn't return anything, so this entire section of code will only return the bottom console log. All changes 


// -------------------------------------------
