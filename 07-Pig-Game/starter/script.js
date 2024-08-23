'use strict';

let firstCurrentScores = 0;
let firstTotalScores = 0;

let secondCurrentScores = 0;
let secondTotalScores = 0;

let currentUser = 0;

const switchUser = () => {
  currentUser = currentUser == 0 ? 1 : 0;
  if (currentUser == 0) {
    secondCurrentScores = 0;
    document.querySelector('#current--1').textContent = secondCurrentScores;
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
  } else {
    firstCurrentScores = 0;
    document.querySelector('#current--0').textContent = firstCurrentScores;
    document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
  }
};

const reset = () => {
  firstCurrentScores = 0;
  firstTotalScores = 0;
  secondCurrentScores = 0;
  secondTotalScores = 0;
  currentUser = 0;
  document.querySelector('#score--0').textContent = firstTotalScores;
  document.querySelector('#score--1').textContent = secondTotalScores;
  document.querySelector('#current--0').textContent = firstCurrentScores;
  document.querySelector('#current--1').textContent = secondCurrentScores;
};

document.querySelector('.btn--roll').addEventListener('click', () => {
  const randomRoll = Math.floor(Math.random() * 6) + 1;
  document.querySelector('.dice').src = `dice-${randomRoll}.png`;
  if (randomRoll > 1) {
    if (currentUser == 0) {
      firstCurrentScores += randomRoll;
      document.querySelector('#current--0').textContent = firstCurrentScores;
    } else {
      secondCurrentScores += randomRoll;
      document.querySelector('#current--1').textContent = secondCurrentScores;
    }
  } else {
    switchUser();
    if (currentUser == 0) {
      firstCurrentScores = 0;
      document.querySelector('#current--0').textContent = firstCurrentScores;
    } else {
      secondCurrentScores = 0;
      document.querySelector('#current--1').textContent = secondCurrentScores;
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', () => {
  if (currentUser == 0) {
    firstTotalScores += firstCurrentScores;
    firstCurrentScores = 0;
    document.querySelector('#score--0').textContent = firstTotalScores;
    document.querySelector('#current--0').textContent = firstCurrentScores;
    if (firstTotalScores >= 100) {
      document.querySelector('#name--0').textContent = 'Player 1 Wins!';
      document.querySelector('.dice').style.display = 'none';
    } else {
      switchUser();
    }
  } else {
    secondTotalScores += secondCurrentScores;
    secondCurrentScores = 0;
    document.querySelector('#score--1').textContent = secondTotalScores;
    document.querySelector('#current--1').textContent = secondCurrentScores;
    if (secondTotalScores >= 100) {
      document.querySelector('#name--1').textContent = 'Player 2 Wins!';
      document.querySelector('.dice').style.display = 'none';
    } else {
      switchUser();
    }
  }
});

document.querySelector('.btn--new').addEventListener('click', reset);
