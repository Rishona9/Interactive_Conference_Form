window.onload = function () {
  document.getElementById("name").focus();
};

document.getElementById("other-job-role").style.display = "none";

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

const color = document.getElementById("color");
const design = document.getElementById("design");

document.getElementById("color").disabled = true;

design.addEventListener("change", (e) => {
  color.disabled = false;
});
