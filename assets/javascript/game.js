// Creating the array of words for the computer to choose from
var words = ['gorilla', 'leaf', 'mountain', 'ocean', 'lizard'];

// Declaring the tallies
var wins = 0; // To increase with each correctly guessed word
var guessesRemaining = 12; // To decrease after each wrong letter guesses


// User presses a key, it records the keypress and then sets it to userGuess
document.onkeyup = function(event){
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// Computer chooses randomly from the array 'words'
	var randomWord = words[Math.floor(Math.random() * words.length)];
	var wordLength = randomWord.length; 
	var underscores = words.replace(/./g, '_');

// Limiting userGuess to these letters
// if ((userGuess == 'a') || (userGuess == 'b') || (userGuess == 'c') || (userGuess == 'd') ||
	// (userGuess == 'e') || (userGuess == 'f') || (userGuess == 'g') || (userGuess == 'h') ||
	// (userGuess == 'i') || (userGuess == 'j') || (userGuess == 'k') || (userGuess == 'l') ||
	// (userGuess == 'm') || (userGuess == 'n') || (userGuess == 'o') || (userGuess == 'p') ||
	// (userGuess == 'q') || (userGuess == 'r') || (userGuess == 's') || (userGuess == 't') ||
	// (userGuess == 'u') || (userGuess == 'v') || (userGuess == 'w') || (userGuess == 'x') ||
	// (userGuess == 'y') || (userGuess == 'z')){





