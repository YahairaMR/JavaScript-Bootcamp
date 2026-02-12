// DOM elements
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const feedbackList = document.querySelector("#feedbackList");

let selectedRating = "Pleased";

// Attaching Event
ratingsContainer.addEventListener("click", (e) => {
  const rating = e.target.closest(".rating");
  if (rating) {
    removeActive();
    rating.classList.add("active");
    selectedRating = rating.querySelector("p").innerText;
  }
});

// Send feedback
sendBtn.addEventListener("click", () => {
  if (!selectedRating) return;

  // Create new list item
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>Feedback:</strong> ${selectedRating}
    <button class="deleteItemBtn">Delete</button>
  `;
  feedbackList.appendChild(li);

  // Add delete functionality
  li.querySelector(".deleteItemBtn").addEventListener("click", () => {
    feedbackList.removeChild(li);
  });

  blaskConfetti();
});

// Remove active class from all ratings
function removeActive() {
  ratings.forEach((rating) => rating.classList.remove("active"));
}

// For Confetti
const blaskConfetti = () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};
