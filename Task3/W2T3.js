//Get input
const sides = prompt("Enter the sides of the triangle (a, b, c): ").split(", ");
// See what kind of triangle it is:
if (sides[0] === sides[1] && sides[1] === sides[2]) {
    document.querySelector("#outputDiv").appendChild(document.createTextNode("The triangle is an equilateral triangle."));
} else if (sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2]) {
    document.querySelector("#outputDiv").appendChild(document.createTextNode("The triangle is an isosceles triangle."));
} else {
    document.querySelector("#outputDiv").appendChild(document.createTextNode("The triangle is a scalene triangle."));
}
