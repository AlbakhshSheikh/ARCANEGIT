function convertTemperature() {
    // Get the numeric value and temperature scale from the input fields
    const numericValue = parseFloat(document.getElementById("numeric-value").value);
    const temperatureScale = document.getElementById("temperature-scale").value;

    // Convert the temperature to the selected scale
    let convertedTemperature = 0;
    if (temperatureScale === "celsius") {
        // Convert to Celsius
        convertedTemperature = numericValue;
    } else if (temperatureScale === "fahrenheit") {
        // Convert to Fahrenheit
        convertedTemperature = (numericValue - 32) / 1.8;
    } else if (temperatureScale === "kelvin") {
        // Convert to Kelvin
        convertedTemperature = numericValue + 273.15;
    }

    // Display the converted temperature
    document.getElementById("converted-temperature").innerHTML = convertedTemperature;
}  
