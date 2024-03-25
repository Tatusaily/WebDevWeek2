/*
Create an array called fruits and initialize it with the following elements: "apple", "banana", "orange", " grape", "kiwi".
Display the contents of the fruits array in the console.
Calculate and display the length of the fruits array.
Access and display the element at index 2 in the fruits array in the console.
Access and display the last element in the fruits array using the length property in the console.
Create an empty array called vegetables.
Prompt the user to enter three vegetables one by one, and add each entered vegetable to the vegetables array using the push() method.
Display the contents of the vegetables array in the console.
Calculate and display the length of the vegetables array.
*/

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log(`Fruits: ${fruits}`);
console.log(`Length: ${fruits.length}`);
console.log(`Index 2: ${fruits[2]}`);
console.log(`Last element: ${fruits[fruits.length - 1]}`);

const vegetables = [];
for (let i = 0; i < 3; i++) {
  vegetables.push(prompt("Enter a vegetable: "));
}
console.log(`Vegetables: ${vegetables}`);
console.log(`Length: ${vegetables.length}`);
