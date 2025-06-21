const btnContainer = document.querySelector('#btn-container');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const output = document.querySelector('#output');

let computerScore = 0;
    let humanScore = 0;

// Add event delegation to btnContainer to target buttons
btnContainer.addEventListener('click', getHumanChoice);

// Function to generate computer choice
function getComputerChoice() {
    // Generate a random number between 1 and 9 inclusive
    const randomNumber = Math.floor(Math.random() * 9) + 1;

    // Variable to hold computer choice
    let computerChoice;

    // Assign "rock", "paper", or "scissors" to computerChoice based on the range of randomNumber
    if (randomNumber >= 1 && randomNumber < 4) {
        computerChoice = 'rock';
    } else if (randomNumber >= 4 && randomNumber < 7) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

// Function to get human choice
function getHumanChoice(event) {
    let humanSelection = '';

    if (event.target.id === 'rock') {
        humanSelection = 'rock';
        console.log(humanSelection);
    } else if (event.target.id === 'paper') {
        humanSelection = 'paper';
        console.log(humanSelection);
    } else {
        humanSelection = 'scissors';
        console.log(humanSelection);
    }


    return humanSelection;
}
       
// Function to play one round using human and computer choices
function playRound(humanChoice, computerChoice) {
    // Will store outcome message of this round
    let result;

    // Compare humanChoice to computerChoice and display the result to the console
    if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
        ) {
        result = `You lose, ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            result = `You win, ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
    } else {
        result = `It's a tie.`;
    }

    return result;
}

// Function to play the game 5 times
function playGame() {
    // Resetting the scores to avoid accumulation after playing 5 times
    humanScore = 0;
    computerScore = 0;

    // An if statement to compare humanScore to computerScore and loggin the result to the console
    if (humanScore > computerScore) {
        console.log('You win!');
    } else if (computerScore > humanScore) {
        console.log('You lose!');
    } else {
        console.log(`It's a tie`);
    }
}