window.onload = function () {
  setTimeout(() => {
    document.getElementById("email-modal").style.display = "flex";
  }, 1000);
};

document.getElementById("email-form").addEventListener("submit", function (e) {
  setTimeout(() => {
    alert("✅ Thanks! Your message was sent.");
    document.getElementById("email-modal").style.display = "none";
  }, 100);
});
