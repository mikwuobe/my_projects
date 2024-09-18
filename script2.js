const scoreElement = document.getElementById('score');
const roundElement = document.getElementById('round');
const userChoiceElement = document.getElementById('user-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const resultElement = document.getElementById('result');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resetButton = document.getElementById('reset');

let score = { user: 0, computer: 0 };
let round = 1;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie';
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        return 'User';
    } else {
        return 'Computer';
    }
}

function updateChoiceDisplay(userChoice, computerChoice) {
    const choiceImages = {
        rock: './images/rocks.jpeg',
        paper: './images/paper.jpeg',
        scissors: './images/scissors.jpeg',
    };
    userChoiceElement.src = choiceImages[userChoice];
    computerChoiceElement.src = choiceImages[computerChoice];
}

rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const winner = determineWinner('rock', computerChoice);
    updateScore(winner);
    updateChoiceDisplay('rock', computerChoice);
    updateResult(winner);
});

paperButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const winner = determineWinner('paper', computerChoice);
    updateScore(winner);
    updateChoiceDisplay('paper', computerChoice);
    updateResult(winner);
});

scissorsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const winner = determineWinner('scissors', computerChoice);
    updateScore(winner);
    updateChoiceDisplay('scissors', computerChoice);
    updateResult(winner);
});

resetButton.addEventListener('click', () => {
    score = { user: 0, computer: 0 };
    round = 1;
    updateScore();
    updateRound();
    userChoiceElement.src = '';
    computerChoiceElement.src = '';
    resultElement.textContent = '';
});

function updateScore(winner) {
    if (winner === 'User') {
        score.user++;
    } else if (winner === 'Computer') {
        score.computer++;
    }
    scoreElement.textContent = `You: ${score.user} - Computer: ${score.computer}`;
}

function updateRound() {
    roundElement.textContent = `Round ${round}`;
    round++;
}

function updateResult(winner) {
    console.log(`Updating result with winner: ${winner}`);
    if (winner === 'Tie') {
        resultElement.textContent = 'It\'s a tie!';
    } else {
        resultElement.textContent = `${winner} wins this round!`;
    }
}