//focuses on name input field on load
window.onload = function () {
  document.getElementById("name").focus();
};
//hides "other job role" input field on load
document.getElementById("other-job-role").style.display = "none";

//displays "other job role" input field only when "other" is selected from dropdown
const otherJobRole = document.getElementById("other-job-role");
const title = document.getElementById("title");

title.addEventListener("change", (e) => {
  const job = e.target.value;
  if (job === "other") {
    otherJobRole.style.display = "block";
  } else {
    otherJobRole.style.display = "none";
  }
});

const design = document.getElementById("design");
const color = document.getElementById("color");
const colorOption = document.querySelectorAll("option[data-theme]");

//disable color field
color.disabled = true;

let currentShirtTheme = null;

//create an eventListener for shirt design
//color dropdown menu displays only the color options associated with the selected design
design.addEventListener("change", (e) => {
  color.disabled = false;

  if (design.value === "js puns") {
    if (currentShirtTheme !== "js puns") {
      color.firstElementChild.innerHTML = "Select a JS Puns theme";
      color.firstElementChild.setAttribute("selected", "selected");
    }

    colorOption.forEach((option) => {
      if (option.getAttribute("data-theme") === "js puns") {
        option.removeAttribute("hidden");
      } else if (option.getAttribute("data-theme") === "heart js") {
        option.setAttribute("hidden", "hidden");
      }

      currentShirtTheme = "js puns";
    });
  } else if (design.value === "heart js") {
    if (currentShirtTheme !== "heart js") {
      color.firstElementChild.innerHTML = "Select an I ♥ JS theme";
      color.firstElementChild.setAttribute("selected", "selected");
    }

    colorOption.forEach((option) => {
      if (option.getAttribute("data-theme") === "heart js") {
        option.removeAttribute("hidden");
      } else if (option.getAttribute("data-theme") === "js puns") {
        option.setAttribute("hidden", "hidden");
      }
    });
    currentShirtTheme = "heart js";
  }
});

color.addEventListener("change", () => {
  color.firstElementChild.removeAttribute("selected");
});

//calcuates total price based on which courses are added or removed
const activities = document.getElementById("activities");
const activitiesCost = document.getElementById("activities-cost");
const checkbox = document.querySelectorAll('input[type="checkbox"]');
let totalCost = 0;

activities.addEventListener("change", (e) => {
  const clickedActivity = e.target;
  let clickedPrice = clickedActivity.getAttribute("data-cost");
  let price = parseInt(clickedPrice);
  if (clickedActivity.checked) {
    totalCost += price;
  } else {
    totalCost -= price;
  }
  activitiesCost.textContent = `Total: $${totalCost}`;
});

//displays associated payment information based on payment type selected from dropdown
const payment = document.getElementById("payment");
const creditCard = document.querySelector("[value=credit-card]");
const creditCardBox = document.getElementById("credit-card");
const payPalBox = document.getElementById("paypal");
const bitCoinBox = document.getElementById("bitcoin");

//sets default payment type on load
creditCard.selected = true;

payment.addEventListener("change", (e) => {
  const paymentType = e.target.value;
  if (paymentType === "paypal") {
    payPalBox.style.display = "";
    creditCardBox.style.display = "none";
    bitCoinBox.style.display = "none";
  } else if (paymentType === "bitcoin") {
    payPalBox.style.display = "none";
    creditCardBox.style.display = "none";
    bitCoinBox.style.display = "";
  } else {
    payPalBox.style.display = "none";
    creditCardBox.style.display = "";
    bitCoinBox.style.display = "none";
  }
});

//form validation - validates each required field and displays error message for any invalid fields
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const cardNumber = document.getElementById("cc-num");
const zip = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const activitiesBox = document.getElementById("activities-box");

function isValidName(nameValue) {
  const nameIsValid = /^[a-z]+[\s]?[a-z]+?$/i.test(nameValue);
  if (nameIsValid) {
    nameValue.parentElement.classList.remove("not-valid");
    nameValue.parentElement.classList.add("valid");
    nameValue.parentElement.lastElementChild.style.display = "none";
    return true;
  } else {
    nameValue.parentElement.classList.remove("valid");
    nameValue.parentElement.classList.add("not-valid");
    nameValue.parentElement.lastElementChild.style.display = "block";
    return false;
  }
}

function isValidEmail(email) {
  const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
  if (emailIsValid) {
    email.parentElement.classList.remove("not-valid");
    email.parentElement.classList.add("valid");
    email.parentElement.lastElementChild.style.display = "none";
  } else {
    email.parentElement.classList.remove("valid");
    email.parentElement.classList.add("not-valid");
    email.parentElement.lastElementChild.style.display = "block";
  }
}

function isValidCreditCardNumber(cardNumber) {
  const creditCardIsValid = /^\d{13, 16}$/.test(cardNumber);
  if (creditCardIsValid) {
    cardNumber.parentElement.classList.remove("not-valid");
    cardNumber.parentElement.classList.add("valid");
    cardNumber.parentElement.lastElementChild.style.display = "none";
  } else {
    cardNumber.parentElement.classList.remove("valid");
    cardNumber.parentElement.classList.add("not-valid");
    cardNumber.parentElement.lastElementChild.style.display = "block";
  }
}

function isValidZip(zip) {
  const zipIsValid = /^\d{5}$/.test(zipCode);
  if (zipIsValid) {
    zip.parentElement.classList.remove("not-valid");
    zip.parentElement.classList.add("valid");
    zip.parentElement.lastElementChild.style.display = "none";
  } else {
    zip.parentElement.classList.remove("valid");
    zip.parentElement.classList.add("not-valid");
    zip.parentElement.lastElementChild.style.display = "block";
  }
}

function isValidActivity(activitiesBox) {
  const activitiesBoxIsValid = totalCostOfActivities > 0;
  if (activitiesBoxIsValid) {
    activitiesBox.parentElement.classList.remove("not-valid");
    activitiesBox.parentElement.classList.add("valid");
    activitiesBox.parentElement.lastElementChild.style.display = "none";
  } else {
    activitiesBox.parentElement.classList.remove("valid");
    activitiesBox.parentElement.classList.add("not-valid");
    activitiesBox.parentElement.lastElementChild.style.display = "block";
  }
}

function isValidCvv(cvv) {
  const cvvIsValid = /^\d{3}$/.test(cvv);
  if (cvvIsValid) {
    cvv.parentElement.classList.remove("not-valid");
    cvv.parentElement.classList.add("valid");
    cvv.parentElement.lastElementChild.style.display = "none";
  } else {
    cvv.parentElement.classList.remove("valid");
    cvv.parentElement.classList.add("not-valid");
    cvv.parentElement.lastElementChild.style.display = "block";
  }
}

//focuses and blurs activities section for improved accessibility
let checkboxes = document.querySelectorAll("input[type = checkbox]");

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("focus", (e) => {
    checkboxes[i].parentElement.classList.add("focus");
  });
  checkboxes[i].addEventListener("blur", (e) => {
    checkboxes[i].parentElement.classList.remove("focus");
  });
}
//checks all form fields are valid so form can be submitted
form.addEventListener("submit", (e) => {
  const userName = nameInput.value;
  const isNameValid = isValidName(userName);
  if (!isNameValid) {
    e.prevent.default;
  }
});
