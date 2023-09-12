const form = document.querySelector("#card-form");
const frontCard = document.querySelector(".front-card");
const backCard = document.querySelector(".back-card");
const container = document.querySelector("#container");
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
const holderError = document.getElementById("holder-error");
const numberError = document.getElementById("number-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");
const cvcError = document.getElementById("cvc-error");
const showSuccess = document.getElementById("success");
const backHome = document.getElementsByClassName(".submit-button");
let isError = false;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validForm();
});

function addValue(input, value) {
  input.addEventListener("input", (event) => {
    value.innerText = event.target.value;
  });
}

function formatteCardNumber(input, value) {
  input.addEventListener("input", (event) => {
    if (
      input.value.length === 4 ||
      input.value.length === 9 ||
      input.value.length === 14
    ) {
      input.value += " ";
    }

    value.innerText = event.target.value;
  });

  //prettier-ignore
  if (!input.value.match(/([0-9]{4}\s?)([0-9]{4}\s?)([0-9]{4}\s?)([0-9]{4}\s?)/)) return false;
  return true;
}

function setError(input, message) {
  input.classList.remove("hide");
  input.innerText = message;
  isError = true;
}

function validInput(input) {
  input.classList.add("hide");
  isError = false;
}

function validForm() {
  formHolder.value.match(
    /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)\s\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)/gm
  )
    ? validInput(holderError)
    : setError(holderError, "Can't be blank.");

  formatteCardNumber(formNumber, cardNumber)
    ? validInput(numberError)
    : setError(numberError, "Wrong format, numbers only.");

  formMonth.value.match(/[0-9]{2}/)
    ? validInput(monthError)
    : setError(monthError, "Can't be blank.");

  formYear.value.match(/[0-9]{2}/)
    ? validInput(yearError)
    : setError(yearError, "Can't be blank");

  formCvc.value.match(/[0-9]{3}/)
    ? validInput(cvcError)
    : setError(cvcError, "Can't be blank");

  if (!isError) {
    form.classList.add("hide");
    showSuccess.classList.remove("hide");
  }
}

addValue(formHolder, cardHolder);
formatteCardNumber(formNumber, cardNumber);
addValue(formMonth, cardMonth);
addValue(formYear, cardYear);
addValue(formCvc, cardCvc);
