window.onload = function () {
  // Only show if user hasn't exited before
  if (localStorage.getItem("mailingListDismissed") !== "true") {
    setTimeout(() => {
      document.getElementById("email-modal").style.display = "flex";
    }, 1000);
  }
};

// On form submission: allow future popups (don’t store anything)
document.getElementById("email-form").addEventListener("submit", function (e) {
  setTimeout(() => {
    alert("✅ Thanks! Your message was sent.");
    document.getElementById("email-modal").style.display = "none";
  }, 100);
});

// On clicking "Exit", store and never show again
document.getElementById("close-popup").addEventListener("click", function () {
  localStorage.setItem("mailingListDismissed", "true");
  document.getElementById("email-modal").style.display = "none";
});