function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}
// getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both have picked ${computerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats rock!";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beats paper!";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats scissors!";
    }    else {
        return `You lose. ${computerSelection} beats ${playerSelection}`;
    }
}
const playerSelection= prompt ("Type a selection of either rock, paper, or scissors").toLowerCase();
const computerSelection= getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
