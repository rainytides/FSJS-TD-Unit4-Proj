/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Step 1: Create the Game class
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Do something wonderful'),
            new Phrase('If you can dream it'),
            new Phrase('Aim for the moon'),
            new Phrase('You are your best thing'),
            new Phrase('To improve is to change')
        ];
        this.activePhrase = null;
    }

    //Step 2: Add the startGame() method
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    //Step 3: Add the getRandomPhrase() method
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    //Step 4: Add the handleInteraction() method
    handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.textContent);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    }

    //Step 5: Add the removeLife() method
    removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    //Step 6: Add the checkForWin() method
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        return hiddenLetters.length === 0;
    }

    //Step 7: Add the gameOver() method
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        const gameOverMessage = document.querySelector('#game-over-message');
        overlay.style.display = 'block';
        if (gameWon) {
            gameOverMessage.textContent = 'Congratulations! You won!';
            overlay.className = 'win';
        } else {
            gameOverMessage.textContent = 'Sorry, better luck next time!';
            overlay.className = 'lose';
        }
        this.resetGame();
    }

    //Step 8: Add the resetGame() method
    resetGame() {
        const phraseDiv = document.querySelector('#phrase ul');
        const hearts = document.querySelectorAll('.tries img');
        const keys = document.querySelectorAll('.key');
        phraseDiv.innerHTML = '';
        hearts.forEach(heart => heart.src = 'images/liveHeart.png');
        keys.forEach(key => {
            key.className = 'key';
            key.disabled = false;
        });
    }
}




