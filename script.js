function startSurprise() {
  document.querySelector(".hero").style.display = "none";

  const sections = document.querySelectorAll(".hidden");
  sections.forEach((sec, i) => {
    setTimeout(() => {
      sec.classList.remove("hidden");
    }, i * 1200);
  });
}

/* Floating Hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 350);
