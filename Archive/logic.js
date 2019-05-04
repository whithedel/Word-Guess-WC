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
}
// return new RegExp(letter, "gi").test(word)

function otherCorrectGuess(word, letter){
    // for(var i = 0; i < word.length; i++){
        if (word.match(letter)){
            return true
        }return false
    }
// }


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
    
    for ( var i=0; i < randomWord.length; i+=1) {
        if (randomWord[i] === letter) {
            currentPuzzleState[i] = letter;
        }
    }
    return currentPuzzleState;
}


// creating the game round object.

function setupRound(theWord) {
    var roundObject = {
        word:theWord,
        guessesLeft:9,
        wrongGuesses:[],
        puzzleState:getBlanks(theWord),
    }
    return roundObject;
}

//updating the game base on correct guessed

function updateRound(setupRound,letter) {
    if (isCorrectGuess(setupRound.word,letter)) {
        setupRound.puzzleState = fillBlanks(setupRound.word,setupRound.puzzleState,letter);

    }
    else {
        setupRound.guessesLeft -=1;
        setupRound.wrongGuesses.push(letter);
    }
}

//check to see if user has won the round or not 

function hasWon(puzzleState) {
    setupRound.puzzleState=puzzleState;
    if (puzzleState.toString().match('_')) {
        return false }
        else {
            return true
        }
    }


