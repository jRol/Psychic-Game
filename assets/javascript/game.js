// Letters array
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

/* console.log(computerGuess); */

// Update the HTML displaying in the #guesses-left div, with the amount of guesses the user has left before reset
function updateGuessesLeft() {

    document.querySelector("#guesses-left").innerHTML = " Guesses Left: " + guessesLeft;
};

// Randomly selects the letter that the user will need to guess
function updateLetterToGuess() {

    this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

// Update the HTML displaying in the #guesses-so-far div, with the user's letter guesses
function updateGuessesSoFar() {

    document.querySelector("#guesses-so-far").innerHTML = "Your Guesses So Far: " + guessedLetters.join(", ");
};

// Reset game function
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


document.onkeyup = function(event) {

    var userGuess = event.key;
    var validInput = letters.includes(userGuess);

    if (validInput === false) {

        alert("Invalid input.  Pleae choose a letter: a-z.");

    } else if (validInput === true) {

        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {

            if (userGuess === letterToGuess) {

                wins++;
                document.querySelector("#wins").innerHTML = "Wins: " + wins;
                alert("Congratulations you're psychic!!  " + userGuess + " is the correct letter!");
                reset();
              /*   console.log("new letter is: " + letterToGuess); */
            }

        } else if (guessesLeft === 0) {

            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            alert("Maybe you'll be psychic next time.  But if you were going to be psychic, wouldn't you already know?!");
            reset();
           /*  console.log("new letter is: " + letterToGuess); */
        }
     
    } else {

        alert("Uh-oh there was an error");

    }
};