/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Create a new instance of the Game 
let game;

// Add the event listener to the "Start Game" and "Play Again" button
const startButton = document.querySelector('#btn__reset');

startButton.addEventListener('click', () => {
    if (game) {
        game.resetGame();
    }
    game = new Game();
    game.startGame();
});

// Add the event listener to the onscreen keyboard
const keyboard = document.querySelector('#qwerty');
keyboard.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
    }
});

// Add the event listener to the physical keyboard
document.addEventListener('keydown', (event) => {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        if (key.textContent === event.key && !key.disabled) {
            game.handleInteraction(key);
        }
    });
});
