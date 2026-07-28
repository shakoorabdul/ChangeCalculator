"use strict";

// Requirement 1: Helper function to get an element by CSS selector
const $ = selector => document.querySelector(selector);

// Requirement 3: Calculates coin values using integer division and modulus
const makeChange = (cents) => {
    // Calculate Quarters (25 cents)
    const quarters = parseInt(cents / 25);
    cents = cents % 25;

    // Calculate Dimes (10 cents)
    const dimes = parseInt(cents / 10);
    cents = cents % 10;

    // Calculate Nickels (5 cents)
    const nickels = parseInt(cents / 5);
    
    // Calculate Pennies (1 cent)
    const pennies = cents % 5;

    // Display results in text boxes
    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
};

// Requirement 2: Validates user input and triggers calculation
const processEntry = () => {
    const cents = parseInt($("#cents").value);

    // Validate if entry is a valid integer between 0 and 99
    if (isNaN(cents) || cents < 0 || cents > 99) {
        alert("Please enter a valid number between 0 and 99.");
        $("#cents").focus();
    } else {
        makeChange(cents);
    }
};

// Requirement 4: DOMContentLoaded event listener setup
document.addEventListener("DOMContentLoaded", () => {
    // Attach click handler to the Calculate button
    $("#calculate").addEventListener("click", processEntry);

    // Set initial focus to the change input box
    $("#cents").focus();
});