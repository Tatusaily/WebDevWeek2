//Get Distances
const coord1 = prompt("Enter the first coordinate (x1, y1): ").split(", ");
const coord2 = prompt("Enter the second coordinate (x2, y2): ").split(", ");
const distance = Math.sqrt(Math.pow(coord2[0] - coord1[0], 2) + Math.pow(coord2[1] - coord1[1], 2)); // Distance formula
document.querySelector("#outputDiv").appendChild(document.createTextNode(`Distance between the two coordinates: ${distance}`));
