// Get input
const num = prompt('Enter a number: ');
let sum = 0;

for(let i = 1; i <= num; i++) {
    sum += i;
}

// Output
document.querySelector('#outputDiv').innerHTML = `The sum of numbers from 1 to ${num} is ${sum}`;