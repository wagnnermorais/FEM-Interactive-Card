const form = document.querySelector("#card-form");
const cardNumber = document.querySelector("#card-number");
const cardHolder = document.querySelector("#card-holder");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCvc = document.querySelector("#card-cvc");
const formHolder = document.querySelector("#form-card-holder");
const formNumber = document.querySelector("#form-card-number");
const formMonth = document.querySelector("#form-card-month");
const formYear = document.querySelector("#form-card-year");
const formCvc = document.querySelector("#form-card-cvc");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

function addValue(input, value) {
  input.addEventListener("input", (e) => {
    value.innerText = validateCard(e.target.value);
  });
}

function validateCard(data) {
  return data.replace(/^[0-9]{4}[" "][0-9]{4}[" "][0-9]{4}[" "][0-9]{4}/);
}

addValue(formHolder, cardHolder);
addValue(formNumber, cardNumber);
addValue(formMonth, cardMonth);
addValue(formYear, cardYear);
addValue(formCvc, cardCvc);
