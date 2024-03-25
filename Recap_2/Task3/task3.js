let input;
const numbers = [];

// loop until the user enters "done" or an empty string:
// If user enters a number, add it to the array, else ignore it.
while (input !== "" && input !== "done") {
  input = prompt("Enter a number (or 'done' or '' to finish): ");
  if (!isNaN(input) && input !== "") {
    numbers.push(Number(input));
  }
}
console.log(`Numbers: ${numbers}`);

// Display even numbers in the array
const evenNumbers = [];
for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}
if (evenNumbers.length > 0) {
  console.log(`Even numbers: ${evenNumbers}`);
} else {
  console.log("No even numbers found.");
}
