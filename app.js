const os = require('os');
const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Mike', 'John', 'Tom', 'Henry', 'Barack'];
const femaleNames = ['Susan', 'Jenny', 'Joanna', 'Hilary', 'Sue'];
const lastNames = ['Smith', 'Doe', 'Kowalski', 'Obama'];

const randChoice = function(arr) {
    const length = arr.length;
    const index = Math.floor(Math.random() * (length)); 
    return arr[index];
};

const people = [];

let i = 20; //

while( i-- ) {
    const person = {};
    const gender = randChoice(genders);
    person.gender = gender;
    person.name = randChoice(gender == 'male' ? maleNames : femaleNames); // short if w środku podaje który argument
    person.lastName = randChoice(lastNames);
    person.age = Math.floor(Math.random() * (69 - 18 + 1)) + 18; 

    people.push(person);
}

const data = JSON.stringify(people, null, 2);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });



