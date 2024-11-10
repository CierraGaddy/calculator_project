const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let calculation = [];
let numArray;

function calculate(button) {
  const value = button.textContent;

  if (value === "C") {
    calculation = [];
    display.textContent = ""; // Clear the display
  } else if (value === "=") {
    try {
      display.textContent = eval(numArray) || ""; // Evaluate expression if valid
    } catch (error) {
      display.textContent = "Error"; // Display error if invalid
    }
    calculation = []; // Reset calculation array
  } else {
    calculation.push(value);
    numArray = calculation.join(""); // Join without spaces for valid eval input
    display.textContent = numArray; // Update display with the current input
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
