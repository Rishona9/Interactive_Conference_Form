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
//disables shirt colors until design is selected
document.getElementById("color").disabled = true;

//color dropdown menu displays only the color options associated with the selected design
const color = document.getElementById("color");
const design = document.getElementById("design");

design.addEventListener("change", (e) => {
  color.disabled = false;
  shirtDesign = e.target.value;
  if (shirtDesign === "js puns") {
    color[1].hidden = false;
    color[2].hidden = false;
    color[3].hidden = false;
    color[4].hidden = true;
    color[5].hidden = true;
    color[6].hidden = true;
  } else {
    color[1].hidden = true;
    color[2].hidden = true;
    color[3].hidden = true;
    color[4].hidden = false;
    color[5].hidden = false;
    color[6].hidden = false;
  }
});

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

const payment = document.getElementById("payment");
const creditCard = document.querySelector("[value=credit-card]");
const creditCardBox = document.getElementById("credit-card");
const payPalBox = document.getElementById("paypal");
const bitCoinBox = document.getElementById("bitcoin");

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

/*const otherJobRole = document.getElementById("other-job-role");
const title = document.getElementById("title");

title.addEventListener("change", (e) => {
  const job = e.target.value;
  if (job === "other") {
    otherJobRole.style.display = "block";
  } else {
    otherJobRole.style.display = "none";
  }
});*/
