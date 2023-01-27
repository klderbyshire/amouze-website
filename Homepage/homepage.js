const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-right")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

function checkBox() {
  const checkbox = document.getElementById("terms-and-conditions");
  const submit = document.getElementById("button-blue");

  if (!checkbox.checked) {
    alert("Please accept the terms and conditions to continue.");
  } else {
    submit.disabled = false;
  }
}
