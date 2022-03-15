// link function
function link(path) {
  window.location.href(path);
}

const display = document.getElementById("mainDisplay");
const numbers = document.querySelectorAll("[id*=number]");
const operators = document.querySelectorAll("[id*=Operator]");

const displayAtt = (text) => {
  display.textContent = text;
};

const insertNumber = (e) => displayAtt(e.target.textContent);
const insertOperator = (e) => displayAtt(e.target.textContent);

numbers.forEach((number) => number.addEventListener("click", insertNumber));

operators.forEach((operator) =>
  operator.addEventListener("click", insertOperator)
);
