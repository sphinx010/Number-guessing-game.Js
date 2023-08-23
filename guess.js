let randomGen = document.getElementById('right-answer');
let generateBtn = document.getElementById('generate-btn');
let userInput = document.getElementById('user-number');
let resultText = document.createElement('p');

document.body.appendChild(resultText);

function crossCheck() {
  let generatedNumber = parseInt(randomGen.value);
  let userGuess = parseInt(userInput.value);

  if (isNaN(userGuess)) {
    resultText.textContent = 'Invalid input. Please enter a number.';
  } else if (userGuess === generatedNumber) {
    resultText.textContent = 'Congratulations! Your guess is correct.';
    resultText.style.color = 'yellow';
  } else {
    resultText.textContent = 'Oops! Your guess is incorrect. Try again.';
  }
}

function generateRandomNumber(event) {
  event.preventDefault(); // Prevents page reload
  let logic4Random = Math.floor(Math.random() * 100) + 1;
  randomGen.value = logic4Random;
}

generateBtn.addEventListener('click', generateRandomNumber);
resultText.style.margin ='75px ';
document.getElementById('generate-btn').addEventListener('click', crossCheck);

