// Get references to the display and buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

// Initialize variables
let currentInput = "0";

// Update display function
function updateDisplay(value) {
    if (currentInput === "0") {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.textContent = currentInput;
}

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        
        if (value === "C") {
            currentInput = "0";
        } else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
        } else if (value === "Backspace") {
            // Handle backspace functionality
            if (currentInput.length > 1) {
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput = "0";
            }
        } else {
            updateDisplay(value);
        }
        
        display.textContent = currentInput;
    });
});

// Handle keyboard input (as before)
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '%' || key === 'Enter' || key === 'Backspace') {
        // Handle numeric keys and operators
        if (key === 'Enter') {
            // Handle "=" when Enter is pressed
            key = '=';
        } else if (key === 'Backspace') {
            // Trigger the Backspace button click
            key = 'Backspace';
        }

        // Trigger click for the corresponding button
        buttons.forEach(button => {
            if (button.getAttribute('data-value') === key) {
                button.click();
            }
        });
    }
});
