let person = [
    {
        name: "Jorge Gonzalez",
        isCoder: true,
        age: 20
    },
    {
        name: "Jz",
        isCoder: true,
        age: 24
    },
    {
        name: "Manuel",
        isCoder: false,
        age: 48
    },
];

console.log(person[2].isCoder);

// For loops
// i++ = i + 1
for(let i = 0; i <= 10; i++){
    console.log(i);
}

for(let i = 0; i < person.length; i++){
    console.log(person[i].name);
}

//While loops
let a = 0;
while(a < person.length){
    console.log(person[a].name);
    a++;
}

for(persons of person){
    console.log(Persons);
}
