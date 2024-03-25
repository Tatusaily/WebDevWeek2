function sortArray(array) {
  return array.sort((a, b) => a - b);
}

const numbers = [5, 3, 8, 1, 2];
console.log(numbers); // [5, 3, 8, 1, 2]
console.log(sortArray(numbers)); // [1, 2, 3, 5, 8]
