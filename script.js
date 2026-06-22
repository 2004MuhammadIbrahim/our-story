document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  const animatedElements = document.querySelectorAll(
    ".fade-in, .slide-in-left, .slide-in-right, .pop-in",
  );
  animatedElements.forEach((el) => observer.observe(el));
});

function showSecret(element, message) {
  if (element.querySelector(".secret-bubble")) return;
  const bubble = document.createElement("div");
  bubble.className = "secret-bubble";
  bubble.innerText = message;
  element.appendChild(bubble);
  setTimeout(() => {
    bubble.style.opacity = "0";
    bubble.style.transition = "opacity 0.4s";
    setTimeout(() => bubble.remove(), 400);
  }, 4000);
}

function pokeDecoy(element) {
  element.style.animation = "none";
  void element.offsetWidth;
  element.style.animation = "shakeDecoy 0.4s";
}

const loadingScreen = document.getElementById("loading-screen");
if (loadingScreen) {
  window.onload = function () {
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      loadingScreen.style.transition = "opacity 0.8s";
      setTimeout(() => (loadingScreen.style.display = "none"), 800);
    }, 2500);
  };
}

function scrollToTimeline() {
  const timeline = document.querySelector(".timeline");
  const music = document.getElementById("bg-music");

  if (music) {
    music.play().catch((error) => console.log("Audio block"));
  }

  if (timeline) {
    timeline.scrollIntoView({ behavior: "smooth" });
  }
}

const counterEl = document.getElementById("counter");
if (counterEl) {
  const startdate = new Date("2024-06-23");
  const today = new Date();
  const diff = today - startdate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  counterEl.innerHTML = days + " days together ❤️";
}

const target = document.getElementById("typewriter");
if (target) {
  const secretText = `There is one more thing I need you to know...\n\nThank you.\n\nThank you for every smile.\nThank you for every late-night conversation.\nThank you for every memory.\nThank you for choosing me.\n\nIf I could start over and live these last two years again...\nI would still choose you.\n\nEvery. Single. Time. ❤️`;
  let index = 0;

  function type() {
    if (index < secretText.length) {
      if (secretText.charAt(index) === "\n") {
        target.innerHTML += "<br>";
      } else {
        target.innerHTML += secretText.charAt(index);
      }
      index++;
      setTimeout(type, 60);
    } else {
      const finalBtn = document.getElementById("final-btn");
      if (finalBtn) finalBtn.style.display = "inline-block";
      window.scrollBy({ top: 100, behavior: "smooth" });
    }
  }
  setTimeout(type, 1000);
}

function showFinalMessage() {
  const finalMessage = document.getElementById("final-message");
  const finalBtn = document.getElementById("final-btn");
  const music = document.getElementById("bg-music");

  if (finalMessage) {
    finalMessage.style.display = "block";
    if (finalBtn) finalBtn.style.display = "none";

    // Play music for finale!
    if (music) {
      music.play().catch((e) => console.log("Audio block"));
    }

    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 100);
  }

  if (typeof confetti !== "undefined") {
    confetti({
      particleCount: 300,
      spread: 180,
      origin: { y: 0.5 },
      colors: ["#ff4d6d", "#ff87ab", "#ffffff"],
    });
  }
}
