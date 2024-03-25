let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(Number(prompt("Enter a number: ")));
}
console.log(numbers);

if (
  numbers.includes(
    Number(prompt("Enter a number to check if it is in the array: ")),
  )
) {
  console.log("Yes, the number is in the array.");
} else {
  console.log("No, the number is not in the array.");
}

numbers.pop();
console.log(numbers);
numbers = numbers.sort();
console.log(numbers);
