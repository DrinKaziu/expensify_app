//
// Object Destructuring
//


// const book = {
//   title: 'Unfuck yourself',
//   author: 'Nacho Libre',
//   publisher: {
//     name: 'Cooper',
//   }
// }

// const {name: publisherName = 'Self Published'} = book.publisher

// console.log(publisherName);

// const person = {
//   name: 'Nacho',
//   age: 6,
//   location: {
//     city: 'New York',
//     temperature: 30
//   }
// };

// const { name, age } = person
// console.log(`${name} is ${age} years old.`);

// const { city, temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} degrees in ${city}.`)
// }


//
// Array Distructuring
//

const address = ['529 E 5th Street', 'New York', 'NY', '10009'];
const [, city, state = 'Neverland' ] = address
console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [product, , medium] = item;
console.log(`The price for a medium ${product} is ${medium}.`);

