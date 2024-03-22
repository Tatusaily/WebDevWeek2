//Celcius to Fahrenheit and Kelvin
function celsiusToFahrenheitAndKelvin(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    let kelvin = celsius + 273.15;
    return [fahrenheit, kelvin];
}

