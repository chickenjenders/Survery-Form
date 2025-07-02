// main.js

// POWER BUTTON
const powerBtn = document.getElementById("power-btn");
const tvContainer = document.getElementById("tv-container");

powerBtn.addEventListener("click", () => {
  tvContainer.classList.toggle("off");
  if (tvContainer.classList.contains("off")) {
    tvContainer.style.opacity = "0";
    setTimeout(() => {
      tvContainer.querySelector(".screen").style.display = "none";
    }, 500);
  } else {
    tvContainer.style.opacity = "1";
    tvContainer.querySelector(".screen").style.display = "block";
  }
});

// CHANNEL SWITCHING
const channelButtons = document.querySelectorAll(".channel-btn");
const channels = document.querySelectorAll(".channel-content");

channelButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-channel");
    channels.forEach((el) => el.classList.remove("active"));
    const newActive = document.getElementById(`channel-${id}`);
    if (newActive) newActive.classList.add("active");
  });
});
