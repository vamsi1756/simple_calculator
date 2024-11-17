let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value); // Evaluate the input
  } catch (e) {
    display.value = 'Error'; // Handle invalid input
  }
}
