const userInput = document.querySelector("#userInput__input");
const submitButton = document.querySelector("#userInput__submitButton");

const prevGuesses = document.querySelector("#prevGuesses");
const guessRemaining = document.querySelector("#guessesRemaining");
guessRemaining.textContent = 10;
const showOutcome = document.querySelector("#showOutcome");
const newGame = document.querySelector("#newGame");
const newGameButton = document.createElement("button");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesCount = 0;
let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", function () {
    const guessedNumber = parseInt(userInput.value);
    validateGuess(guessedNumber);
  });
}

function validateGuess(guessedNumber) {
  if (Number.isNaN(guessedNumber)) {
    alert("Please enter a valid number");
  } else if (guessedNumber < 1) {
    alert("Please enter a number more than 1");
  } else if (guessedNumber > 100) {
    alert("Please enter a number less than 100");
  } else {
    displayGuess(guessedNumber);
    checkGuess(guessedNumber);
  }
}

function displayGuess(guess) {
  guessesCount++;
  userInput.value = "";
  prevGuesses.textContent += guess + " ";
  guessRemaining.textContent = 10 - guessesCount;
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`🎉 Correct! You guessed it in ${guessesCount} tries.`);
    endGame();
  } else {
    if (guess < randomNumber) {
      displayMessage("📉 Too low!");
    } else {
      displayMessage("📈 Too high!");
    }

    if (guessesCount === 10) {
      displayMessage(`💀 Game Over! The number was ${randomNumber}.`);
      endGame();
    }
  }
}

function displayMessage(message) {
  showOutcome.textContent = message;
}

function endGame() {
  userInput.disabled = true;
  submitButton.disabled = true;
  playGame = false;

  newGameButton.textContent = "🔁 Play Again";
  newGame.appendChild(newGameButton);

  newGameButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessesCount = 0;
  playGame = true;
  userInput.disabled = false;
  submitButton.disabled = false;
  userInput.value = "";
  prevGuesses.textContent = "";
  guessRemaining.textContent = "10";
  showOutcome.textContent = "";
  newGame.removeChild(newGameButton);
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
