// Javascript Objects Exercises
// Inheritance
// Given the following objects:
var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};

var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

// One:
// Write code to make daughter inherit properties from mom.
// What are the daugther's properties and their values? Print them out.
const momCSV = Object.values(mom).join(' ');

class Bio {
  constructor(firstName, lastName, eyeColor, hairColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
  }
}

console.log(momCSV);

// Two:
// Add a method called showInfo to mom by attaching a function
// to it as a property. Calling this method will print out all four properties.
// Call this method on both mom and daugther.
