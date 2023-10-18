function guessingGame() {
    let secretNumber = Math.floor(Math.random() * 100);
    let attempts = 0;
    let isOver = false;
    let target = null;
  
    return function (guess) {
      attempts++;
  
      if (isOver) {
        return "The game is over, you already won!";
      }
  
      if (target === null) {
        target = secretNumber;
      }
  
      if (guess < target) {
        return guess + " is too low!";
      } else if (guess > target) {
        return guess + " is too high!";
      } else {
        isOver = true;
        return `You win! You found ${target} in ${attempts} guess${attempts === 1 ? "" : "es"}.`;
      }
    };
  }
  
  module.exports = { guessingGame };
  
