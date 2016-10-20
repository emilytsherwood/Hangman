
//Need to get user input
//need to create an array of words
//need to get the selected word
//need to compare it to the selected

document.onkeyup = function (event){
	 console.log(String.fromCharCode(event.keyCode).toLowerCase());
 }
// Variables //

var words = ['gorilla', 'leaf', 'ocean']; // Creating the array of words for the computer to choose from
var currentWord = words[0];
var dashes = [];
var userGuesses = [];
var matchedLetters;
var remainingGuesses;
var totalGuesses = 12;
var wins = [];
var correctLetters; // Stores all the correct letters? 

// Functions //

function startReset() {
	// new word gets chosen (currentWord)
	// 
}

function wordChoice() {
	// The computer will randomly choose a word from the 'words' array
	// Will then set the 'currentWord' to this chosen word
}

function underscore() {
	// Will create underscores(_) for the the length of the currentWord
}

function letterCheck() {
	// Will take userGuess...
	// Loop through the letters in 'currentWord' to match any correct letters
	// Loop?
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
	// Increase 
}

function endGame() {
	// If remainingGuesses reaches 0...end game
}




// Loop to show wordLength as underscores
for (var i = 0; i < currentWord.length; i++){
	dashes.push('_'); //.push will push whatever is in the ('') into the currentWord var
}
document.getElementById('currentWord').innerHTML=(dashes.join(' '));

// document.onkeyup = function (event){
	// var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// words[Math.floor(Math.random() * words.length)];
// // User presses a key, it records the keypress and then sets it to userGuess
// document.onkeyup = function(event){
// 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


// //Limiting userGuess to these letters
// if ((userGuess == 'a') || (userGuess == 'b') || (userGuess == 'c') || (userGuess == 'd') ||
// 	(userGuess == 'e') || (userGuess == 'f') || (userGuess == 'g') || (userGuess == 'h') ||
// 	(userGuess == 'i') || (userGuess == 'j') || (userGuess == 'k') || (userGuess == 'l') ||
// 	(userGuess == 'm') || (userGuess == 'n') || (userGuess == 'o') || (userGuess == 'p') ||
// 	(userGuess == 'q') || (userGuess == 'r') || (userGuess == 's') || (userGuess == 't') ||
// 	(userGuess == 'u') || (userGuess == 'v') || (userGuess == 'w') || (userGuess == 'x') ||
// 	(userGuess == 'y') || (userGuess == 'z')){





