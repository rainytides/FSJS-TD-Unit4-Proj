# Phrase Hunter - FSJS-TD-Unit4-Proj

This repository contains the fourth project for the Treehouse Full Stack JavaScript Tech Degree, named "Phrase Hunter". It's a web-based word guessing game developed using JavaScript, HTML, and CSS, emphasizing Object-Oriented Programming (OOP) principles.

## Features

### Flashing Hearts Indicator
- **Purpose**: Enhances user experience by providing a visual cue as the game nears its end.
- **Implementation**:
  - **Heart Indicators**: Represented as images in the DOM.
  - **Detection**: The `removeLife` method checks if only two hearts remain, then adds a flashing CSS class to these heart indicators.
  - **CSS Animation**: A keyframe animation in the flashing CSS class toggles the heart images' opacity, creating the flashing effect.

### Phrase Reveal on Game Completion
- **Purpose**: Acts as a reward mechanism, allowing players to validate their correct guesses upon winning.
- **Implementation**:
  - **Reveal Mechanism**: The `revealPhrase` method displays the entire phrase at the end of a winning game.
  - **Game Over Invocation**: In the `gameOver` method, `revealPhrase` is invoked only if the player wins.
  - **Timeout Mechanism**: A `setTimeout` function ensures the revealed phrase is displayed for 1 second before resetting the game.

## Game Play
- Players guess letters of a hidden phrase using an onscreen keyboard.
- Correct guesses reveal the letter in the phrase display area.
- The game tracks the player's remaining lives with heart icons.
- Special visual and interactive features enhance the gameplay experience.

## Responsive Design
- The game interface is fully responsive, ensuring a seamless experience across various devices.

## Accessibility
- Key features include keyboard navigability and clear visual feedback, catering to a wider audience.

## Technologies Used
- JavaScript for game logic and interactivity.
- HTML for structuring the game interface.
- CSS for styling and animations.

## Setup
To run this project locally:
1. Clone the repository.
2. Open `index.html` in a web browser.

Enjoy playing "Phrase Hunter" and testing your word-guessing skills!
