function checkBox() {
  const checkbox = document.getElementById("terms-and-conditions");
  const submit = document.getElementById("submit");

  if (!checkbox.checked) {
    alert("Please accept the terms and conditions to continue.");
  } else {
    submit.disabled = false;
  }
}
