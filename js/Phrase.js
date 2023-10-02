/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Create the Phrase class
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // Add the addPhraseToDisplay() method
    addPhraseToDisplay() {
        const phraseDiv = document.querySelector('#phrase ul');
        this.phrase.split('').forEach(char => {
            const li = document.createElement('li');
            if (char === ' ') {
                li.className = 'space';
            } else {
                li.className = `hide letter ${char}`;
                li.textContent = char;
            }
            phraseDiv.appendChild(li);
        });
    }

    // Add the checkLetter() method
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    // Add the showMatchedLetter() method
    showMatchedLetter(letter) {
        const matchedLetters = document.querySelectorAll(`.${letter}`);
        matchedLetters.forEach(matchedLetter => {
            matchedLetter.classList.remove('hide');
            matchedLetter.classList.add('show');
        });
    } }

