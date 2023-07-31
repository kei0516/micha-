document.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const popup = document.getElementById("popup");
  const loveMessage = document.getElementById("loveMessage");

  function showPopup() {
    popup.style.display = "block";
  }

  function hidePopup() {
    popup.style.display = "none";
  }

  function showLoveMessage() {
    loveMessage.style.display = "block";
  }

  function hideLoveMessage() {
    loveMessage.style.display = "none";
  }

  function loopUntilYes() {
    showPopup();

    yesBtn.addEventListener("click", function () {
      showLoveMessage();
      hidePopup();
    });

    noBtn.addEventListener("click", function () {
      hideLoveMessage();
      loopUntilYes();
    });
  }

  // Initially hide the love message and show the loopUntilYes popup
  hideLoveMessage();
  loopUntilYes();
});
