/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// Step 1: Create the Phrase class
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.phrases = [
            'A blessing in disguise',
            'A dime a dozen',
            'Beat around the bush',
            'Bite the bullet',
            'Break a leg',
            'Call it a day',
            'Cutting corners',
            'Easy does it',
            'Get out of hand',
            'Get something out of your system'
        ];
    }

    // Step 2: Add the addPhraseToDisplay() method
    addPhraseToDisplay() {
        const phraseDiv = document.querySelector('#phrase ul');
        const phraseArray = this.phrase.split('');
        phraseArray.forEach(letter => {
            const li = document.createElement('li');
            if (letter === ' ') {
                li.className = 'space';
                li.textContent = ' ';
            } else {
                li.className = `hide letter ${letter}`;
                li.textContent = letter;
            }
            phraseDiv.appendChild(li);
        });
    }

    addPhraseToDisplay() {
        const phraseDiv = document.querySelector('#phrase ul');
        
        if (!phraseDiv) {
            console.error("Could not find the #phrase ul element.");
            return;
        }
    
        if (!this.phrase) {
            console.error("The phrase property is not set or empty.");
            return;
        }
    
        const phraseArray = this.phrase.split('');
        
        phraseArray.forEach(letter => {
            const li = document.createElement('li');
            
            if (letter === ' ') {
                li.className = 'space';
                li.textContent = ' ';
            } else {
                li.className = `hide letter ${letter}`;
                li.textContent = letter;
            }
    
            phraseDiv.appendChild(li);
        });
    }
    
    // Step 3: Add the checkLetter() method
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    // Step 4: Add the showMatchedLetter() method
    showMatchedLetter(letter) {
        const matchedLetters = document.querySelectorAll(`.${letter}`);
        matchedLetters.forEach(matchedLetter => {
            matchedLetter.classList.remove('hide');
            matchedLetter.classList.add('show');
        });
    }

    // Step 5: Add the removePhraseFromDisplay() method
    removePhraseFromDisplay() {
        const phraseDiv = document.querySelector('#phrase ul');
        phraseDiv.innerHTML = '';
    }

    // Step 6: Add the getRandomPhrase() method
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
}

