// // Chalanges
// // 1
// alert('Welcome to our site!');
// let name = 'Moon';
// let age = 25;
// let salesNumber = 50;
// let availableBalance = 1000;
// alert('Error.');
// let errorMassage = 'Error';
// alert(errorMassage);
// let userName = prompt('Tell us your name: ');
// let userAge = prompt('Tell us your age: ');
// if (userAge >= 18) {
//     alert('Can drive!');
// }
// else {
//     alert('Can not drive!');
// }

// // 2
// let day = prompt('What week day is today?');
// if (day == 'Sunday' || day == 'Saturday') {
//     alert('Happy weekend!');
// } else {
//     alert('Happy week!');
// }
// let checkNumber = prompt('Choose a number: ');
// if (checkNumber < 0) {
//     alert('Negative');
// } else if (checkNumber > 0) {
//     alert('Positive');
// } else {
//     alert('0');
// }
// let score = 110;
// if (score >= 100) {
//     alert('You win');
// } else {
//     alert('You loose');
// }
// let money = 1000;
// alert(`You have $${money}.`);
// alert(`Your name is ${userName}.`);

// // 3
// let number1 = 1;
// while (number1 <= 10) {
//     alert(number1);
//     number1++;
// }

// let number2 = 10;
// while (number2 >= 0) {
//     alert(number2);
//     number2--;
// }

// let number3 = prompt('Choose a number');
// while (number3 >= 0) {
//     alert(number3);
//     number3--;
// }

// let letsGo = 0;
// let number4 = prompt('Where to?');
// while (letsGo <= number4) {
//     alert(letsGo);
//     letsGo++;
// }

// // 4
// console.log('Welcome');
// let name1 = 'Jaime';
// console.log(name1);
// alert(`Hello, ${name1}`);
// let language = prompt('What is your favorite programing language?');
// console.log(language);
// let value1 = parseInt(prompt('Pick a number'));
// let value2 = parseInt(prompt('Pick a number'));
// let sum = value1 + value2;
// console.log(`The sum of the 2 values is ${sum}`);
// let value3 = parseInt(prompt('Pick a number'));
// let value4 = parseInt(prompt('Pick a number'));
// let sub = value3 - value4;
// console.log(`The sub of the 2 values is ${sub}`);
// let age = prompt('What is yout age?');
// if (age >= 18) {
//     console.log('18+');
// } else {
//     console.log('17-');
// }
// let number5 = parseInt(prompt('Pick a number'));
// if (number5 > 0) {
//     alert('Positive');
// } else if (number5 < 0) {
//     alert('Negative');
// } else {
//     alert('Zero');
// }
// let number6 = 1;
// while ( number6 <= 10) {
//     console.log(number6);
//     number6++;
// }
// let score = prompt('What is the score');
// if (score >= 7) {
//     console.log('Approved');
// } else {
//     console.log('Not approved');
// }
// console.log(parseInt(Math.random() + 1));
// console.log(parseInt(Math.random() * 10 + 1));
// console.log(parseInt(Math.random() * 1000 + 1));

// // Chalanges

let secretNumber = parseInt(Math.random() * 100 + 1);
console.log(secretNumber);
let chosenNumber;
let attempts = 1;

while (chosenNumber != secretNumber) {
    chosenNumber = prompt('Pick a number between 1 and 100');
    
    if (secretNumber == chosenNumber) {
        break;        
    } 
    else if (secretNumber > chosenNumber) {
        alert(`Secret number is greater than ${chosenNumber}`);
        
    } else {
        alert(`Secret number is less than ${chosenNumber}`);
    }
    attempts++;
}

let word = attempts > 1 ? 'attempts' : 'attempt';
alert(`You are right ${secretNumber} - ${attempts} ${word}`);
