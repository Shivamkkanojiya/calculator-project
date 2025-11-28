const display = document.querySelector("#display");
function appendToDisplay(value) {
  display.value = display.value + value;
}

function clearDisplay() {
  display.value = "";
}

function calculator() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
