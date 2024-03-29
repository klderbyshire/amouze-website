const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-right")[0];

// Navbar
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlinks");
  const navLinks = document.querySelectorAll(".navlinks li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1.5
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// Form
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
