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
// // Chalanges

let secretNumber = 30;
console.log(secretNumber);
let chosenNumber;
let life = 3;

while (chosenNumber != secretNumber && life > 0) {
    chosenNumber = prompt('Pick a number');
    
    if (secretNumber == chosenNumber) {
        alert(`You are right. ${secretNumber}`);
        
    } 
    else if (secretNumber > chosenNumber) {
        life--;
        alert(`Secret number is greater than ${chosenNumber} - ${life} life/s`);
        
    } else {
        life--;
        alert(`Secret number is less than ${chosenNumber} - ${life} life/s`);
    }
    console.log(life);
}
