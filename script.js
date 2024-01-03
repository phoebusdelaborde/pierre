const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDiv = document.getElementById('result');

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

function playRound(playerSelection) {
    const options = ['rock', 'paper', 'scissors'];
    const computerSelection = options[Math.floor(Math.random() * 3)];
    let result;

    if (playerSelection === computerSelection) {
        result = "Égalité !";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        result = "Vous avez gagné !";
    } else {
        result = "Vous avez perdu !";
    }

    resultDiv.textContent = `Vous avez choisi ${playerSelection}. L'ordinateur a choisi ${computerSelection}. ${result}`;
}
