// link function
function link(path) {
  window.location.href(path);
}

const numeros = [7, 8, 9, 4, 5, 6, 1, 2, 3];

const display = document.getElementById("mainDisplay");
const secondDisplay = document.getElementById("secondDisplay");
const numbers = document.querySelectorAll("[id*=number]");
const operators = document.querySelectorAll("[id*=Operator]");
let firstValue;
let operator;

numeros.map((item) => {
  const newDivNumber = document.createElement("button");
  newDivNumber.id = `number${item}`;
  newDivNumber.innerHTML = item;
  // if (item === 5) newDivNumber.className = "red";
  numbersBox.appendChild(newDivNumber);
});

const displayAtt = (text) => {
  display.textContent += text;
  if (!firstValue) secondDisplay.textContent += text;
  else
    secondDisplay.textContent = `${firstValue} ${operator} ${display.textContent}`;
};

const declaredOperator = (value) => {
  firstValue = display.textContent;
  display.textContent = "";
  secondDisplay.textContent = `${firstValue} ${value}`;
  operator = value;
};

const insertNumber = (e) => displayAtt(e.target.textContent);
const insertOperator = (e) => declaredOperator(e.target.textContent);

numbers.forEach((number) => number.addEventListener("click", insertNumber));

operators.forEach((operator) =>
  operator.addEventListener("click", insertOperator)
);

const getResult = () => {
  if (!firstValue) return null;
  const secondValue = display.textContent;
  secondDisplay.innerHTML = `${firstValue} ${operator} ${secondValue}`;
};

const resetResult = () => {
  firstValue = null;
  operator = null;
  display.textContent = null;
  secondDisplay.textContent = null;
};
