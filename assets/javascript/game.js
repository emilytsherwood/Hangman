// Variables //

var words = ['gorilla', 'leaf', 'ocean']; // Creating the array of words for the computer to choose from
var currentWord = words[0];
var dashes = [];
var userGuesses = [];
var guessedLetters = [];
var matchedLetters; //
var remainingGuesses; 
var totalGuesses = 12;
var wins = [];
var correctLetter;
var wordSplit = []; //Splitting up the words in the array by letter to match user guess

// Functions //

function startReset() {
	// new word gets chosen (currentWord)
	// totalGuesses gets reset to 12
	// userGuesses gets reset
}

function wordChoice() {
	// The computer will randomly choose a word from the 'words' array
	// Will then set the 'currentWord' to this chosen word
	// Math.random function?
}

function underscore() {
	// Will create underscores(_) for the the length of the currentWord
}

function letterCheck() {
	// Will take userGuess...
	// Loop through the letters in 'currentWord' to match any correct letters
	// Loop?
	 // for (i = 0; i < currentWord.length; i++) {
  //   		dashes = dashes.replace("_", currentWord.charAt[i]);
		// } 
}

function goodGuess() {
	// If userGuess matches correctLetters in currentWord... 
	// Replace the corresponding underscores with the correct letter
	// If/Else statement?
}

function badGuess() {
	// If userGuess is incorrect in currentWord...
	// set updateGuesses to decrease
}

function guessedLetters() {
	// Will display the letters that the user has guessed (that are incorrect)
}

function updateGuesses() {
	// Will decrease everytime the user gets a guess wrong (badGuess) by 1
}

function success() {
	// If word is completey guessed (all underscores gone and replaced with goodGuess)
	// Increase score by 1
}

function endGame() {
	// If remainingGuesses reaches 0...end game
}


// Start of game //
    totalGuesses = 12;
    userGuesses = [];
    remainingGuesses = 12;
    wins = [];

    // Computer choosing the random word from array 
    currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord); //Console.logs the hidden word for my reference

    // Loop to show wordLength as underscores
    for (var i = 0; i < currentWord.length; i++) {
        dashes.push('_'); //.push will push whatever is in the ('') into the currentWord var
    }
    document.getElementById('currentWord').innerHTML = (dashes.join(' '));

	//Will split the currentWord into single character strings
    wordSplit = currentWord.split(''); 
    console.log(wordSplit)

    // Displaying initial set-up information
    document.getElementById('winning').innerHTML = 'Wins: '
    document.getElementById('guessesLeft').innerHTML = 'Number of Guesses Remaining: ' + remainingGuesses;
    document.getElementById('alreadyGuessed').innerHTML = 'Letters Already Guessed: '

// Game will begin when any key is pressed
document.onkeyup = function(event) {
    userGuess = (String.fromCharCode(event.keyCode).toLowerCase());

//checking to see if userGuess is in the word
        	userGuesses.push(userGuess.toLowerCase());
        	var matchedLetters = '';
        	for (i = 0; i<currentWord.length; i++) {
        		if (userGuesses.indexOf(currentWord[i].toLowerCase()) > -1) {
        		matchedLetters += currentWord[i];
        	}
        	else {
        		matchedLetters += '_';
        	}
    console.log(matchedLetters);
    }
};


//         document.getElementById('currentWord').innerHTML = (currentWord.charAt[i]);
//         // Will take userGuess...
//         // Loop through the letters in 'currentWord' to match any correct letters
//         // Loop?


// // Once you decrease the guesses, write this to display on place
//   document.getElementById('guessesLeft').innerHTML = 'Number of Guesses Remaining: ' ; + guessedLetters.join(', ');
// };











