const message = document.querySelector(".message");
const inputValue = document.querySelector("input");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
});
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(inputValue.value);
  console.log(typeof guess);
  if (!guess) {
    message.textContent = "no number guessed";
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    message.textContent = "right guess";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "Lost the game";
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  } else {
    if (score > 1) {
      message.textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "Lost the game";
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
});
