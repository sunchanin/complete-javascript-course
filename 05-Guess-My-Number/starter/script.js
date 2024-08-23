'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let result = '';
let score = 20;
let scores = [];

const highScore = array => {
  return Math.max(...array);
};

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayScore = inputScore => {
  document.querySelector('.score').textContent = inputScore;
};

const displayHighScore = () => {
  document.querySelector('.highscore').textContent = `${highScore(scores)}`;
};

const displaySecretNumber = () => {
  document.querySelector('.number').textContent = secretNumber;
};

const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};

const displayBackgroundColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const resetSecretNumber = () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
};

const resetGuessInput = () => {
  document.querySelector('.guess').value = '';
};

const compareNumbers = x => {
  switch (true) {
    case score < 1:
      result = 'Game over! You lost the game.';
      break;
    case x == secretNumber:
      result = 'You win!';
      displayBackgroundColor('#60b347');
      scores.push(score);
      displayHighScore();
      break;
    case x != secretNumber:
      score--;
      result = x < secretNumber ? 'Too low!' : 'Too high!';
      break;
  }
};

document.querySelector('.check').addEventListener('click', () => {
  const inputNumber = Number(document.querySelector('.guess').value);
  compareNumbers(inputNumber);
  displayMessage(result);
  displayScore(score);
});

displaySecretNumber();

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  displayScore(score);

  result = 'Start guessing...';
  displayMessage(result);

  resetSecretNumber();
  displayNumber(secretNumber);

  displayBackgroundColor('#222');
});


