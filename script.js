'use strict';

const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

diceElement.classList.add('hidden');

let currentScore = 0;
let playerState = 0;
let player0Score = 0;
let player1Score = 0;

score0Element.textContent = 0;
score1Element.textContent = 0;

rollBtn.addEventListener('click', () => {
  const diceValue = Math.trunc(Math.random() * 6) + 1;
  console.log(diceValue);
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${diceValue}.png`;

  if (diceValue !== 1) {
    currentScore += diceValue;
    document.getElementById(`current--${playerState}`).textContent =
      currentScore;
    // current0Element.textContent = currentScore;
  } else {
    resetCurrentScoreAndChangePlayerState();
  }
});

holdBtn.addEventListener('click', () => {
  console.log('hold');
  if (!playerState) {
    player0Score += currentScore;
    document.getElementById(`score--${playerState}`).textContent = player0Score;
  } else {
    player1Score += currentScore;
    document.getElementById(`score--${playerState}`).textContent = player1Score;
  }
  resetCurrentScoreAndChangePlayerState();
  win();
});

function resetCurrentScoreAndChangePlayerState() {
  currentScore = 0;
  document
    .querySelector(`.player--${playerState}`)
    .classList.remove('player--active');

  if (playerState) playerState = 0;
  else playerState = 1;

  document
    .querySelector(`.player--${playerState}`)
    .classList.add('player--active');
  current0Element.textContent = 0;
  current1Element.textContent = 0;
}

function win() {
  if (player0Score >= 50) {
    alert('Plyaer 1 win.');
  } else if (player1Score >= 50) {
    alert('Player 2 win.');
  }
}

newBtn.addEventListener('click', () => {
  document.location.reload();
});
