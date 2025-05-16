window.onload = function () {
  // Only show if the user hasn't interacted before
  if (!localStorage.getItem("mailingListDismissed")) {
    setTimeout(() => {
      document.getElementById("email-modal").style.display = "flex";
    }, 1000);
  }
};

// On form submit, save to localStorage and hide
document.getElementById("email-form").addEventListener("submit", function (e) {
  localStorage.setItem("mailingListDismissed", "true");
  setTimeout(() => {
    alert("✅ Thanks! Your message was sent.");
    document.getElementById("email-modal").style.display = "none";
  }, 100);
});

// On "No thanks" button click, also hide and store
document.getElementById("close-popup").addEventListener("click", function () {
  localStorage.setItem("mailingListDismissed", "true");
  document.getElementById("email-modal").style.display = "none";
});
