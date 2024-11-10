//This connects the HTML display class element with JavaScript
const display = document.querySelector(".display");
//This connects all of the the HTML buttons to JavaScript
const buttons = document.querySelectorAll("button");

let calculation = [];
let numArray;

//This function uses a button and value to store the input from the button
function calculate(button) {
  const value = button.textContent;

  //This sets the display to an empty string if the "C" button is clicked
  if (value === "C") {
    calculation = [];
    display.textContent = "";

    /*This else if statement will try to evaluate or solve the input 
    if the = button is clicked
    if there are no errors it will display the result on the screen. 
    if there are errors it will display "Error"
    */
  } else if (value === "=") {
    try {
      display.textContent = eval(numArray) || "";
    } catch {
      display.textContent = "Error";
    }
    calculation = [];
    /*This else statement will push the value to the array,
    remove the spaces in the input and join the elements,
    And updates the array  
    */
  } else {
    calculation.push(value);
    numArray = calculation.join("");
    display.textContent = numArray;
  }
}

/*This listens for the buttons on the calculator to be clicked 
and allows the calculate funtion to respond to clicked buttons
*/
buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
