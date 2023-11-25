function checkPassword() {
  var password = document.getElementById("passwordInput").value;
  var linkContainer = document.getElementById("linkContainer");
  var celebrationLink = document.getElementById("celebrationLink");

  if (password === "Nirvana") {
    linkContainer.style.display = "block";
  } else {
    alert("Incorrect password. Please try again");
  }
}
