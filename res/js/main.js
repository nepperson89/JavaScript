// Function to verify service quality
function validateServiceQuality(quality) {
    const validQualities = ['great', 'ok', 'poor'];
    if (validQualities.includes(quality.toLowerCase())) {
        return true;
    } else {
        alert("Invalid service quality entered. Please enter 'great', 'ok', or 'poor'.");
        return false;
    }
}

// Function to verify service amount
function validateServiceAmount(amount) {
    if (amount >= 5.00 && amount <= 500.00) {
        return true;
    } else {
        alert("Invalid service amount entered. Please enter a value between $5.00 and $500.00.");
        return false;
    }
}

// Function to calculate the tip amount
function calculateTip(amount, quality) {
    let tipPercentage;
    switch (quality.toLowerCase()) {
        case 'great':
            tipPercentage = 0.20;
            break;
        case 'ok':
            tipPercentage = 0.15;
            break;
        case 'poor':
            tipPercentage = 0.10;
            break;
        default:
            tipPercentage = 0;
    }
    return amount * tipPercentage;
}

// Main script
let serviceAmount = parseFloat(prompt("Enter the dollar amount of the service:"));
if (validateServiceAmount(serviceAmount)) {
    let serviceQuality = prompt("Enter the service quality (great, ok, poor):");
    if (validateServiceQuality(serviceQuality)) {
        let tipAmount = calculateTip(serviceAmount, serviceQuality);
        document.write(`For a service amount of $${serviceAmount.toFixed(2)}, a tip of $${tipAmount.toFixed(2)} is recommended for ${serviceQuality} service.`);
    }
}
