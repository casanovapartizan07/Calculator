let currentInput = "",
  decimalAdded = false;

function appendToResult(value) {
  currentInput += value;
  document.getElementById("result").value = currentInput;
  decimalAdded = false;
}

function appendDecimal() {
  if (!decimalAdded) {
    currentInput += ".";
    document.getElementById("result").value = currentInput;
    decimalAdded = true;
  }
}

function clearResult() {
  currentInput = "";
  document.getElementById("result").value = currentInput;
  decimalAdded = false;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById("result").value = currentInput;
    decimalAdded = currentInput.includes(".");
  } catch (error) {
    currentInput = "";
    document.getElementById("result").value = "Error";
    decimalAdded = false;
  }
}

document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.top = e.pageY - 5 + "px";
  cursor.style.left = e.pageX - 5 + "px";
});

function calculatePercentage() {
  try {
    currentInput = (parseFloat(currentInput) / 100).toString();
    document.getElementById("result").value = currentInput;
    decimalAdded = currentInput.includes(".");
  } catch (error) {
    currentInput = "";
    document.getElementById("result").value = "Error";
    decimalAdded = false;
  }
}
