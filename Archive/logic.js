//array with all guessing words

var gameWords = ['basketball', 'tennis', 'boxing', 'swimming', 'speed-skating', 'skiing', 'hockey', 'football', 'figure-skating', 'baseball', 'rugby', 'soccer', 'cycling'];



// function to grab words

var randomWord = function(gameWordsArray) {
    return gameWordsArray[Math.floor(Math.random()*gameWordsArray.length)];
};



// checking if guessed letter is correct 

function isCorrectGuess(Word, letter) {
    if(Word.indexOf(letter)!== -1) {
        return true;
    }
    return false;
};



//function for blanks of the word

function getBlanks(word) {
    var blankWord = [];
    for ( var i=0 ; i < word.length ; i+=1)  {
        blankWord.push('_');
    }
    return blankWord;
};


//funtion to fill in the blank with the guessed letter

function fillBlanks(randomWord, currentPuzzleState, letter) {

    
  var letter = false;
  for (var i = 0; i < currentPuzzleState; i++) {
    if (randomWord[i] === letter) {
       letter = true;
    }
  }
}
  