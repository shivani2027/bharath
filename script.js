function convertTemperature() {
    // Get the input value
    var celsiusInput = document.getElementById('celsius');
    var celsiusValue = parseFloat(celsiusInput.value);

    // Check if the input is a valid number
    if (isNaN(celsiusValue)) {
        alert('Please enter a valid number for Celsius temperature.');
        return;
    }

    // Convert Celsius to Fahrenheit
    var fahrenheitValue = (celsiusValue * 9/5) + 32;

    // Display the result
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = celsiusValue + ' Celsius is ' + fahrenheitValue.toFixed(2) + ' Fahrenheit.';
}
