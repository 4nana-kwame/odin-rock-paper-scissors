const gameContainer = document.querySelector('#game-container');
const btnContainer = document.querySelector('#btn-container');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const output = document.querySelector('#output');
const displayCompScore = document.querySelector('.computer-score');
const displayHumanScore = document.querySelector('.your-score');
const displayResult = document.querySelector('.result');
const resetBtn = document.querySelector('#reset');
const btnContainerChildren = document.querySelectorAll('#btn-container > button');

// Track scores
let computerScore = 0;
let humanScore = 0;

// Track game round
let gameRound = 0;

// Add event delegation to btnContainer to target buttons
btnContainer.addEventListener('click', getHumanChoice);
resetBtn.addEventListener('click', resetGame)

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
    let target = event.target;

    if (!['rock', 'paper', 'scissors'].includes(target.id)) return;

    let humanChoice = '';

    if (target.id === 'rock') {
        humanChoice = 'rock';
    } else if (target.id === 'paper') {
        humanChoice = 'paper';
    } else {
        humanChoice = 'scissors';
    }

    const computerChoice = getComputerChoice();

    // Compare humanChoice to computerChoice
    if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
        ) {
            displayResult.textContent = `Lose, ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            gameRound++;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            displayResult.textContent = `Win, ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            gameRound++;
    } else {
        displayResult.textContent = `Tie!`;
        gameRound++;
    }

    // Display result in the DOM
    displayCompScore.textContent = `Computer score: ${computerScore}`;
    displayHumanScore.textContent = `Your score: ${humanScore}`

    if (gameRound === 5) {
        endGame();
    }
}

// Function to end the game after 5 plays
function endGame() {
    // An if statement to compare humanScore to computerScore to display winner
    if (humanScore > computerScore) {
        displayResult.textContent = `You won \u{1F389}`;
    } else if (computerScore > humanScore) {
        displayResult.textContent = `Computer won. \u{1F916}`;
    } else {
        displayResult.textContent = `It's a tie! \u{1F91D}`;
    }

    // Resetting the scores and round to avoid accumulation after playing 5 times
    humanScore = 0;
    computerScore = 0;
    gameRound = 0;

    // Disable buttons
    btnContainerChildren.forEach(child => {
        child.disabled = true;
        child.style.cursor = 'not-allowed';
        child.style.opacity = '0.5';
    });

    resetBtn.style.display = 'block';
}

// Function to reset the game
function resetGame() {
    displayCompScore.textContent = '';
    displayHumanScore.textContent = '';
    displayResult.textContent = '';
    
    btnContainerChildren.forEach(child => {
        child.disabled = false;
        child.style.cursor = 'pointer';
        child.style.opacity = '1';
    });

    humanScore = 0;
    computerScore = 0;
    gameRound = 0;

    resetBtn.style.display = 'none';
}