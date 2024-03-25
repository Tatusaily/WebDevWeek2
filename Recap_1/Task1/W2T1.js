//Celcius to Fahrenheit and Kelvin
function celsiusToFahrenheitAndKelvin(target) {
    // Input
    const celsius = parseFloat(prompt("Enter the temperature in Celsius: "));
    let fahrenheit = celsius * 9 / 5 + 32;
    let kelvin = celsius + 273.15;
    
    // Output
    target.appendChild(document.createTextNode(`Temperature in Fahrenheit: ${fahrenheit}°F`));
    target.appendChild(document.createElement("br"));
    target.appendChild(document.createTextNode(`Temperature in Kelvin: ${kelvin}K`));
}

// Input
celsiusToFahrenheitAndKelvin(document.querySelector("#outputDiv"));
