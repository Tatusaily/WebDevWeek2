function sortArray(numbers, order) {
  // Sort the array in ascending order by default
  // If the order is "desc", sort the array in descending order
  return numbers.sort((a, b) => (order === "asc" ? a - b : b - a));
}

let numbers = [5, 3, 8, 1, 2];
console.log(numbers); // [5, 3, 8, 1, 2]
console.log(sortArray(numbers, "asc")); // [1, 2, 3, 5, 8]
console.log(sortArray(numbers, "desc")); // [8, 5, 3, 2, 1]

numbers = [9, 4, 7, 1, 2, 3, 8, 8, 10];
console.log(numbers); // [9, 4, 7, 1, 2, 3, 8, 8, 10]
console.log(sortArray(numbers, "asc")); // [1, 2, 3, 4, 7, 8, 8, 9, 10]
console.log(sortArray(numbers, "desc")); // [10, 9, 8, 8, 7, 4, 3, 2, 1]
