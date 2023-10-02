/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Step 1: Add the event listener to the "Start Game" button
const startButton = document.querySelector('#btn__reset');
const game = new Game();

startButton.addEventListener('click', () => {
    game.startGame();
});

//Step 2: Add the event listener to the onscreen keyboard
const keyboard = document.querySelector('#qwerty');
keyboard.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
    }
});

//Step 3: Add the event listener to the physical keyboard
document.addEventListener('keydown', (event) => {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        if (key.textContent === event.key && !key.disabled) {
            game.handleInteraction(key);
        }
    });
});

//Step 4: Add the event listener to the "Play Again" button
const playAgainButton = document.querySelector('#btn__reset');
playAgainButton.addEventListener('click', () => {
    game.resetGame();
});






