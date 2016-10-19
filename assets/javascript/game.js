//Creating the array of words for the computer to choose from
// var words = [
//  ['g','o','r','i','l','l','a'],
//  ['l','e','a','f'], ['m','o','u','n','t','a','i','n'], ['o','c','e','a','n']
//  ]

var words = ['gorilla', 'leaf', 'ocean'];


// Computer chooses randomly from the array 'words'
var randomWord = words[Math.floor(Math.random() * words.length)];

// for (var i = 0; i < (wordLength.length); i++){
// 		console.log (wordLength[i] = '_');

// Function to show wordLength as underscores
	document.onkeyup = function (event){
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		for (var i = 0; i < words.length; i++){
			console.log (words.length[i]);
	// 	document.getElementById("underscores")
	// 		var createUnderscores =
	// 			document.write(wordLength[i]);
	// 		underscores.appendChild(createUnderscores);
	// 	}
	// }

// // User presses a key, it records the keypress and then sets it to userGuess
// document.onkeyup = function(event){
// 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// // Declaring the tallies
// // var wins = 0; // To increase with each correctly guessed word
// // var guessesRemaining = 12; // To decrease after each wrong letter guesses


// //Limiting userGuess to these letters
// if ((userGuess == 'a') || (userGuess == 'b') || (userGuess == 'c') || (userGuess == 'd') ||
// 	(userGuess == 'e') || (userGuess == 'f') || (userGuess == 'g') || (userGuess == 'h') ||
// 	(userGuess == 'i') || (userGuess == 'j') || (userGuess == 'k') || (userGuess == 'l') ||
// 	(userGuess == 'm') || (userGuess == 'n') || (userGuess == 'o') || (userGuess == 'p') ||
// 	(userGuess == 'q') || (userGuess == 'r') || (userGuess == 's') || (userGuess == 't') ||
// 	(userGuess == 'u') || (userGuess == 'v') || (userGuess == 'w') || (userGuess == 'x') ||
// 	(userGuess == 'y') || (userGuess == 'z')){





