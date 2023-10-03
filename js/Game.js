/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Create the Game class
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

    // Add the startGame() method
    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    // Add the getRandomPhrase() method
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    // Add the handleInteraction() method
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

    // Add the removeLife() method
    removeLife() {
        const hearts = document.querySelectorAll('.tries img');
        hearts[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
    
        // Check if only two hearts are left
        if (this.missed === 3) {
            const remainingHearts = document.querySelectorAll('.tries img[src="images/liveHeart.png"]');
            remainingHearts.forEach(heart => heart.classList.add('flashing'));
        }
    
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }
    // Add the checkForWin() method
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        return hiddenLetters.length === 0;
    }

    // Add the revealPhrase() method
    revealPhrase() {
        const phraseDiv = document.querySelector('#phrase ul');
        phraseDiv.innerHTML = '';
        this.activePhrase.addPhraseToDisplay();
        const letters = document.querySelectorAll('#phrase li');
        letters.forEach(letter => {
            if (letter.className.includes('hide')) {
                letter.classList.remove('hide');
                letter.classList.add('show');
            }
        });
    }

    // Add the gameOver() method
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        const gameOverMessage = document.querySelector('#game-over-message');
        
        // Hide the overlay immediately
        overlay.style.display = 'none';
    
        // Reveal the phrase only if the user won
        if (gameWon) {
            this.revealPhrase();
            setTimeout(() => {
                overlay.style.display = 'block';
                gameOverMessage.textContent = 'Congratulations! You won!';
                overlay.className = 'win';
                this.resetGame();
            }, 1000);
        } else {
            // Display the lost message immediately
            overlay.style.display = 'block';
            gameOverMessage.textContent = 'Sorry, better luck next time!';
            overlay.className = 'lose';
            this.resetGame();
        }
    }
    
    // Add the resetGame() method
    resetGame() {
    const phraseDiv = document.querySelector('#phrase ul');
    const hearts = document.querySelectorAll('.tries img');
    const keys = document.querySelectorAll('.key');
    
    phraseDiv.innerHTML = '';
    hearts.forEach(heart => {
        heart.src = 'images/liveHeart.png';
        heart.classList.remove('flashing');  
    });
    
    keys.forEach(key => {
        key.className = 'key';
        key.disabled = false;
    });
}
}
