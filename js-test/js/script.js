const textArray = [
  "こんにちは",
  "おはよう",
  "さようなら",
  "ありがとう",
  "おやすみ"
];

let currentText = "";
let score = 0;
let timeLeft = 30;
let intervalId = null;

const textElement = document.getElementById("text");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const timeLeftElement = document.getElementById("time-left");

function getRandomText() {
  const index = Math.floor(Math.random() * textArray.length);
  return textArray[index];
}

function updateText() {
  currentText = getRandomText();
  textElement.textContent = currentText;
  inputElement.value = "";
}

function calculateScore() {
  const correctChars = inputElement.value.split("").filter((char, i) => {
    return char === currentText[i];
  }).length;
  const accuracy = correctChars / currentText.length;
  const timeBonus = Math.max(0, timeLeft / 30);
  const score = Math.floor(accuracy * 100 * timeBonus);
  return score;
}

function handleInput() {
  if (inputElement.value === currentText) {
    score += calculateScore();
    scoreElement.textContent = `Score: ${score}`;
    updateText();
  }
}

function startGame() {
  updateText();
  inputElement.addEventListener("input", handleInput);
  startButton.disabled = true;
  intervalId = setInterval(() => {
    timeLeft -= 1;
    timeLeftElement.textContent = timeLeft.toString();
    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
}

function resetGame() {
  clearInterval(intervalId);
  timeLeft = 30;
  timeLeftElement.textContent = timeLeft.toString();
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  startButton.disabled = false;
}

function endGame() {
  clearInterval(intervalId);
  inputElement.removeEventListener("input", handleInput);
  const scoreText = `Final score: ${score}`;
  alert(scoreText);
  resetGame();
}

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);
