const classicCodingGreetings = "Hello World!";
let numberOne = 5;
let numberTwo = 1;

function getGreeting(classicCodingGreetings) {
    return classicCodingGreetings;
}

let sumOfNumbers = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
}

document.getElementById('greetingsHeader').innerHTML = `Using a string literal we showed the classic coding greeting, ${getGreeting(classicCodingGreetings)}`;
document.getElementById('calculationTotal').innerHTML = `Taking the numbers <strong>${numberOne}</strong> and <strong>${numberTwo}</strong> and getting the sum of <strong>${
sumOfNumbers(numberOne, numberTwo)}</strong>`
