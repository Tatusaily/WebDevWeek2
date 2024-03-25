// Get input
const num = parseInt(prompt('Enter a number: '));

let table = document.createElement('table');
const outputDiv = document.getElementById('outputDiv');

//Rows
for (let i = 1; i <= num; i++) {
    let row = document.createElement('tr');
    //Columns
    for (let j = 1; j <= num; j++) {
        let cell = document.createElement('td');
        cell.textContent = i * j;
        row.appendChild(cell);
    }
    table.appendChild(row);
}
outputDiv.appendChild(table);