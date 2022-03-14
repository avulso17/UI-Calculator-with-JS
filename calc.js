const display = document.getElementById("mainDisplay");
const numbers = document.querySelectorAll("[id*=number]");

const displayAtt = (text) => {
  display.textContent = text;
};

const insertNumber = (e) => displayAtt(e.target.textContent);

numbers.forEach((number) => number.addEventListener("click", insertNumber));
