function appendToOutput(value) {
  if (document.getElementById("output").value === "0" && !isNaN(value)) {
    document.getElementById("output").value = value;
  } else {
    document.getElementById("output").value += value;
  }
}

function clearOutput() {
  document.getElementById("output").value = "0";
}

function calculate() {
  let input = document.getElementById("output").value;
  let result;
  try {
    result = eval(input);
  } catch (error) {
    result = "Error";
  }
  document.getElementById("output").value = result;
}
