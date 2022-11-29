game();

function game() {
    options = ['rock', 'paper', 'scissors'];
    const maxRound = 5;
    let playerWins = 0;
    let computerWins = 0;
    let roundNumber = 1; 

     /* loops through this while roundNumber is 5 or less... */
    while (roundNumber <= maxRound) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerInput();
        let roundResult = playRound(playerSelection, computerSelection);
        switch(roundResult) {
            case 'win':
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                playerWins = (playerWins + 1);
                roundNumber = (roundNumber + 1)
            case 'lose':
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                computerWins = (computerWins + 1);
                roundNumber = (roundNumber + 1);
            case 'draw':
                alert('It\'s a draw! Go again!');
                console.log('It\'s a draw! Go again!'); /* doesn't increment round number or wins */
            } 
        }   

         /* then goes here, for the ending. */
        if (playerWins > computerWins) { 
            console.log('Congratulations! You win!');
        } else {
            console.log('Sorry, you lost!')
        }


    
    
/* ============== defining all the functions here =============== 
due to "lexical scope", variable availability is determined not by where a function 
is called from, but by where the function is ORIGINALLY DECLARED. */

    function playRound(playerSelection, computerSelection) {
        let result; 
        switch(computerSelection) {  // switch based on computerSelection
            case 'rock': {
                switch(playerSelection) {
                    case 'rock':
                        result = 'draw';
                        break;
                    case 'paper':
                        result = 'win';
                        break;
                    case 'scissors':
                        result = 'lose';
                        break;
                }
            }
            case 'paper': {
                switch(playerSelection) {
                    case 'rock':
                        result = 'win';
                        break;
                    case 'paper':
                        result = 'draw';
                        break;
                    case 'scissors':
                        result = 'lose';
                        break;
                }
            }
            case 'scissors': {
                switch(playerSelection) {
                    case 'rock':
                        result = 'win';
                        break;
                    case 'paper':
                        result = 'lose';
                        break;
                    case 'scissors':
                        result = 'draw';
                        break;
                }
            }
        }
        return result;
    }

    
    
    function getArrayElement(array) {  //gets an array element from a specified array.
        return (array[Math.floor(Math.random() * array.length)]);  
        }

    function getComputerChoice() {
        let getChoice = getArrayElement(options);
        console.log(`computerSelection is: ${getChoice}`);
        return getChoice;    
    }

    function getPlayerInput() { //get the player's selection
        let loopInput = true;
        while (loopInput == true) {
            let playerInput = prompt(`Let\'s play a game of rock paper scissors, muff. Best of ${maxRound}. Round ${roundNumber}! Put your choice right down there.`)
            console.log(playerInput); // for debugging purposes
            let playerSelection = playerInput.toLowerCase(); // convert the input to lowercase, for case-insensitivity
            console.log(`playerSelection is: ${playerSelection}`);  // for debugging purposes
            loopInput = false;
            if (options.includes(playerSelection) == false) {
                loopInput = true;
                console.log('Invalid player input, dumbo.'); // for debugging purposes
                // alert('That\'s not a choice, stupid. Don\'t you know how to play this game? Pick again!');
                // playerInput = prompt(`Let\'s play a game of rock paper scissors, muff. Best of ${maxRound}. Round ${roundNumber}! Put your choice right down there.`)
            }
        }    
        return playerSelection;
        }
    
        function checkSelection (selection) { // check if playerSelection is present in the options array
            if (options.includes(selection)) { // this may be too granular a function...
                return true;
            } else {
                return false;
            }
        }
    



    // function compareSelection(playerSelection, computerSelection) { // compare the two selections and see who wins!
    //     let result; 
    //     switch(computerSelection) {  // switch based on computerSelection
    //         case 'rock': {
    //             switch(playerSelection) {
    //                 case 'rock':
    //                     result = 'draw';
    //                     break;
    //                 case 'paper':
    //                     result = 'win';
    //                     break;
    //                 case 'scissors':
    //                     result = 'lose';
    //                     break;
    //             }
    //         }
    //         case 'paper': {
    //             switch(playerSelection) {
    //                 case 'rock':
    //                     result = 'win';
    //                     break;
    //                 case 'paper':
    //                     result = 'draw';
    //                     break;
    //                 case 'scissors':
    //                     result = 'lose';
    //                     break;
    //             }
    //         }
    //         case 'scissors': {
    //             switch(playerSelection) {
    //                 case 'rock':
    //                     result = 'win';
    //                     break;
    //                 case 'paper':
    //                     result = 'lose';
    //                     break;
    //                 case 'scissors':
    //                     result = 'draw';
    //                     break;
    //             }
    //         }
    //     }
    //     return result;
    // }

} //end game function
