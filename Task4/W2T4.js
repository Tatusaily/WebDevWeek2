// Get Input
let grade = parseInt(prompt("Enter your grade: "));
// Check if the input is a number
if (isNaN(grade)) {
    console.log("Please enter a number.");
    document.querySelector("#outputDiv").appendChild(document.createTextNode("Please enter a number."));
} else if (grade > 100 || grade < 0){
    console.log("Please enter a number between 0 and 100.");
    document.querySelector("#outputDiv").appendChild(document.createTextNode("Please enter a number between 0 and 100."));
} else {
    // Check the grade
    if (grade >= 88){
        document.querySelector("#outputDiv").appendChild(document.createTextNode("5"));
    } else if (grade >=76){
        document.querySelector("#outputDiv").appendChild(document.createTextNode("4"));
    } else if (grade >= 64){
        document.querySelector("#outputDiv").appendChild(document.createTextNode("3"));
    } else if (grade >= 52){
        document.querySelector("#outputDiv").appendChild(document.createTextNode("2"));
    } else if (grade >= 40){
        document.querySelector("#outputDiv").appendChild(document.createTextNode("1"));
    } else {
        document.querySelector("#outputDiv").appendChild(document.createTextNode("0"));
    }
}