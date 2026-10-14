
const verifyButton = document.getElementById("checkButton");
const message = document.getElementById("message");

verifyButton.addEventListener("click", () => {
  message.textContent =
    "Success! Your website is working correctly.";
});
