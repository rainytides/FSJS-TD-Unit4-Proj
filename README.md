# FSJS-TD-Unit4-Proj
Fourth project for the Treehouse fullstack Javascript tech degree

**Flashing Hearts Indicator**  
To enhance the user experience and provide a visual cue to players that the game is nearing its end, the heart indicators will start flashing when only two hearts remain. This serves as a subtle prompt to the player, signaling that they are close to losing the game.

**Implementation:**  
- **Heart Indicators:** These are represented as images in the DOM. Every time a player makes an incorrect guess, the removeLife method is invoked.
- **Detection:** Inside the removeLife method, there is a check to see if the player has lost three lives (indicating only two hearts are left). At this point, the remaining heart indicators have the flashing CSS class added to them.
- **CSS Animation:** The flashing CSS class contains a keyframe animation that toggles the opacity of the heart images, creating a flashing effect.

**Phrase Reveal on Game Completion and Player Wins**  
After a game round is completed and the player emerges victorious, the solution phrase is momentarily revealed to the player. This feature acts as a reward mechanism, allowing players to validate their correct guesses.

**Implementation:**  
- **Reveal Mechanism:** The method revealPhrase is responsible for displaying the entire phrase. It iterates over each character in the phrase and makes sure it's visible to the player.
- **Game Over Invocation:** In the gameOver method, only when the player has won the game, the revealPhrase method is invoked to display the solution.
- **Timeout Mechanism:** After revealing the phrase, a setTimeout function is used to wait for 4 seconds before proceeding to reset the game. This ensures that players have ample time to relish their victory and view the complete phrase before the game interface is reset for a new round.
