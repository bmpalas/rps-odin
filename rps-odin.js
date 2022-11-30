game();

function game() {
    console.log('---Initializing!!!---')
    options = ['rock', 'paper', 'scissors'];
    const maxRound = 5;
    let playerWins = 0;
    let computerWins = 0;
    let roundNumber = 1; 
    let computerSelection;
    let playerSelection;

     /* loops through this while roundNumber is 5 or less... */
    while (roundNumber <= maxRound) {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerInput();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(`roundResult is "${roundResult}"`); // debugging
        switch (roundResult) {
            case 'win': 
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                alert(`You win! ${playerSelection} beats ${computerSelection}`);
                playerWins = (playerWins + 1);
                roundNumber = (roundNumber + 1);
                break;
            case 'lose':
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                alert(`You lose! ${computerSelection} beats ${playerSelection}`);
                computerWins = (computerWins + 1);
                roundNumber = (roundNumber + 1);
                break;
            case 'draw':
                console.log('It\'s a draw! Do-over!'); /* doesn't increment round number or wins */
                alert('It\'s a draw! Do-over!');
                break;
            } 
        }   

         /* then goes here, for the ending. */
        if (playerWins > computerWins) { 
            console.log(`Congratulations! You won ${playerWins} out of ${maxRound} rounds, so you win!`);
            alert(`Congratulations! You won ${playerWins} out of ${maxRound} rounds, so you win!`);
        } else {
            console.log(`Sorry! You only won ${playerWins} out of ${maxRound} rounds, so you lose!`);
            alert(`Sorry! You only won ${playerWins} out of ${maxRound} rounds, so you lose!`);

        }


    
    
/* ============== defining all the functions here =============== 
due to "lexical scope", variable availability is determined not by where a function 
is called from, but by where the function is ORIGINALLY DECLARED. */

    function playRound(playerSelection, computerSelection) {
        let result; 
        switch(computerSelection) {  // switch based on computerSelection
            case 'rock':  
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
                break;
            case 'paper': 
                switch(playerSelection) {
                    case 'rock':
                        result = 'lose';
                        break;
                    case 'paper':
                        result = 'draw';
                        break;
                    case 'scissors':
                        result = 'win';
                        break;
                }
                break;
            case 'scissors': 
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
                break;
            }
        console.log `playRound() result is ${result}`;
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
        console.log('getPlayerInput()');
        let loopInput = true;
        let playerSelection;
        while (loopInput == true) {
            let playerInput = prompt(`Let's play a game of rock paper scissors, Best of ${maxRound} wins. Round ${roundNumber}! Enter your choice below.`)
            console.log(playerInput); // for debugging purposes
            playerSelection = playerInput.toLowerCase(); // convert the input to lowercase, for case-insensitivity
            console.log(`playerSelection is: ${playerSelection}`);  // for debugging purposes
            loopInput = false;
            if (options.includes(playerSelection) == false) {
                loopInput = true;
                console.log('Invalid player input, dumbo.'); // for debugging purposes
                alert('Invalid input. \n"Rock", "paper", or "scissors" please!');
                                // playerInput = prompt(`Let\'s play a game of rock paper scissors, muff. Best of ${maxRound}. Round ${roundNumber}! Put your choice right down there.`)
            }
        }
        console.log(playerSelection);
        return playerSelection;
    }
    
} //end game() function
