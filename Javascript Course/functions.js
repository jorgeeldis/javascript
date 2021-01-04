//Functions

function fullName(firstName = 'Jorge', lastName = 'Gonzalez') 
{
   // console.log (`Full Name -- ${firstName} ${lastName}`)
    return firstName + ' ' + lastName;
}

const fullname = fullName('Eldis', 'Gonzalez');
console.log(fullname);

//Exercise

function sum(num1, num2)
{
    return num1 + num2;
}

console.log(sum(4, 6));