// Variables //

// Creating the array of words for the computer to choose from
var words = ['garden', 'leaf', 'ocean', 'mountain', 'eagle', 'valley', 'tree', 'harambe']; 
var currentWord = words[0];
var dashes = [];
var userGuesses = [];
var guessedLetters = [];
var matchedLetters;
var remainingGuesses = 12;
var wins = 0;
var wordSplit = []; //Splitting up the words in the array by letter to match user guess


// Start of game //
function startReset() {
	remainingGuesses = 12;
	wins+1;
	userGuesses = [];
	guessedLetters = [];
    // Computer choosing the random word from array 
    currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord); //Console.logs the hidden word for my reference
}// End of startReset function
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
    var matchedLetters = ''; // These are the correct letters the the user guesses
    for (i = 0; i < currentWord.length; i++) {
        if (userGuesses.indexOf(currentWord[i].toLowerCase()) > -1) {
            matchedLetters += currentWord[i];
        } else {
            matchedLetters += '_ ';
        }
        document.getElementById('guessesLeft').innerHTML = 'Number of Guesses Remaining: ' + remainingGuesses;
        document.getElementById('alreadyGuessed').innerHTML = 'Letters already Guessed: ' + userGuesses.join(', ');
    }
    	// Updating the remaining guesses, decreasing by 1
     	remainingGuesses--;

    console.log(matchedLetters);
    document.getElementById('currentWord').innerHTML = matchedLetters;

    if (currentWord == matchedLetters) {
        alert('You win!');
       	wins++; 
        document.getElementById('winning').innerHTML = 'Wins: ' + wins;
        startReset();
    } else if (remainingGuesses <= 0) {
        alert('You lose! The word was ' + currentWord);
        startReset();
    }

};


















