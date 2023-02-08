const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

const buttons = document.querySelectorAll(".charKey");
buttons.forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", () => {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (allowedKeys.includes(event.key)) {
    return (input.value += event.key);
  }
  if (event.key === "Backspace") {
    return (input.value = input.value.slice(0, -1));
  }
  if (event.key === "Enter") {
    calculate();
  }
});

const equal = document.getElementById("equal");
equal.addEventListener("click", calculate);

function calculate() {
  const result = eval(input.value);
  resultInput.value = result;
}
