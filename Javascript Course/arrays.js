//Arrays 
const friends = ['Sam', 'John', 'Ron'];
console.log(friends);
const fruits = ['Apple', 'Mango', 'Banana'];
console.log(fruits);
let firstPerson = ['Sammy', 18, false];

friends.push('Jorge');
console.log(friends);
friends.unshift('Eldis');
console.log(friends);
friends.shift();
console.log(friends);

console.log(friends.length); 

console.log(friends[1]);

console.log(Array.isArray(8));

const names = new Array('Jorge', 'Eldis', 'Gonzalez');
console.log(names);