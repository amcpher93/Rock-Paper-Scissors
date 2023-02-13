const choice = ["rock", "paper", "scissors"];
function getComputerChoice() {
    const random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}
// getComputerChoice();

let playerScore= 0;
let computerScore= 0;


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both have picked ${computerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        return "You win! Paper beats rock!";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++
        return "You win! Scissors beats paper!";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++
        return "You win! Rock beats scissors!";
    }    else {
        computerScore++
        return `You lose. ${computerSelection} beats ${playerSelection}`;
    }
}
//console.log(playRound(playerSelection, computerSelection));
console.log ("START GAME");

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection= prompt ("Type a selection of either rock, paper, or scissors").toLowerCase();
        if (!choice.includes(playerSelection)){
            playerSelection= prompt ("Not an option, please try again. Type a selection of either rock, paper, or scissors").toLowerCase();
        }
        const computerSelection= getComputerChoice();
        let result= playRound(playerSelection, computerSelection);
        console.log(result);
        console.log(`player score is ${playerScore} computer score is ${computerScore}`);
    }
}
game();
if (computerScore > playerScore){
    console.log(`Computer wins! The score is ${computerScore} to ${playerScore}`); 
} else if (playerScore > computerScore){
    console.log(`YOU win! The score is ${playerScore} to ${computerScore}`); 
} else {
    console.log(`It's a tie! The score is ${playerScore} to ${computerScore}`);
}

console.log("GAME OVER");