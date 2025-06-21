const btnContainer = document.querySelector('#btn-container');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const output = document.querySelector('#output');

// Track scores
let computerScore = 0;
let humanScore = 0;

// Track game round
let gameRound = 0;

// Add event delegation to btnContainer to target buttons
btnContainer.addEventListener('click', getHumanChoice);

// Function to generate computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 9) + 1;

    let computerChoice;

    if (randomNumber >= 1 && randomNumber < 4) {
        computerChoice = 'rock';
    } else if (randomNumber >= 4 && randomNumber < 7) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

// Function to get human choice and compare to computer choice and display result in the DOM
function getHumanChoice(event) {
    // if (!['rock', 'paper', 'scissors'].includes(target.id)) return;
    let target = event.target;

    let humanChoice = '';

    if (target.id === 'rock') {
        humanChoice = 'rock';
    } else if (target.id === 'paper') {
        humanChoice = 'paper';
    } else {
        humanChoice = 'scissors';
    }

    const computerChoice = getComputerChoice();

    let result;

    // Compare humanChoice to computerChoice
    if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
        ) {
        result = `You lose, ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        gameRound++;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            result = `You win, ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
            gameRound++;
    } else {
        result = `It's a tie.`;
        gameRound++;
    }

    // Display result in the DOM
    const divResult = document.createElement('div');
    divResult.textContent = result;

    output.appendChild(divResult);

    const divScore = document.createElement('div');
    divScore.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}.`;

    output.appendChild(divScore);

    if (gameRound === 5) {
        endGame();
    }
}

// Function to end the game after 5 plays
function endGame() {
    // DOM element to display the winner of the game
    const finalResult = document.createElement('div');

    // An if statement to compare humanScore to computerScore and loggin the result to the console
    if (humanScore > computerScore) {
        finalResult.textContent = 'Congratulations! You won.';
    } else if (computerScore > humanScore) {
        finalResult.textContent = 'You lost.';
    } else {
        finalResult.textContent = `It's a tie!`;
    }

    output.appendChild(finalResult);

    // Resetting the scores and round to avoid accumulation after playing 5 times
    humanScore = 0;
    computerScore = 0;
    gameRound = 0;

    // Disable buttons
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}