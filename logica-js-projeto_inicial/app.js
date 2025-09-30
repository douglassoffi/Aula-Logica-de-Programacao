// Chalanges
// 1
alert('Welcome to our site!');
let name = 'Moon';
let age = 25;
let salesNumber = 50;
let availableBalance = 1000;
alert('Error.');
let errorMassage = 'Error';
alert(errorMassage);
let userName = prompt('Tell us your name: ');
let userAge = prompt('Tell us your age: ');
if (userAge >= 18) {
    alert('Can drive!');
}
else {
    alert('Can not drive!');
}

// 2
let day = prompt('What week day is today?');
if (day == 'Sunday' || day == 'Saturday') {
    alert('Happy weekend!');
} else {
    alert('Happy week!');
}
let checkNumber = prompt('Choose a number: ');
if (checkNumber < 0) {
    alert('Negative');
} else if (checkNumber > 0) {
    alert('Positive');
} else {
    alert('0');
}
let score = 110;
if (score >= 100) {
    alert('You win');
} else {
    alert('You loose');
}
let money = 1000;
alert(`You have $${money}.`);
alert(`Your name is ${userName}.`);
// Chalanges

let secretNumber = 30;
console.log(secretNumber);
let chosenNumber = prompt('Choose a number between 1 and 30.'); 

if (secretNumber == chosenNumber) {
    alert(`You are right. ${secretNumber}`);
} else {
    alert(`You are wrong. ${secretNumber}`);
}