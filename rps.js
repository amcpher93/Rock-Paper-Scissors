let playerScore= 0;
let computerScore= 0;
let scores = document.createElement('p');
scores.className = 'results';
let body = document.querySelector('body');
const results = document.createElement('div');
results.className = 'results';
body.appendChild(results);

/*const button = document.querySelector('#reset');
button.addEventListener('click', () =>{
    alert("Reset Game?");
});*/
/*document.getElementById('resetButton').addEventListener('click, playRound');*/

const buttons = document.querySelectorAll('button');
console.log(buttons)
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.textContent === 'Reset Game') {
            // reset();
            playerScore=0;
            computerScore=0;
            document.querySelector('.rock').disabled = false;
            document.querySelector('.paper').disabled = false;
            document.querySelector('.scissor').disabled = false;
            score();

        } else {
            let playerSelection = button.className;
            console.log(playerSelection)
    
            let computerSelection = getComputerChoice();
            let roundResult =  playRound(playerSelection, computerSelection);
            console.log(roundResult);
            if (roundResult === 'playerWin') {
                playerScore++;
            } else if (roundResult === 'computerWin') {
                computerScore++;
            }
            score();
            gameEnd();

        }

    })
})

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}
// getComputerChoice();

 
/*const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    const computerSelection= getComputerChoice();
    playRound('rock', computerSelection);
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    const computerSelection= getComputerChoice();
    playRound('paper', computerSelection);
});
const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () => {
    const computerSelection= getComputerChoice();
    playRound('scissor', computerSelection);
});*/
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection)
    let tie = `It's a tie you both picked ${playerSelection}`;
    let playerWin = `You win this round! ${playerSelection} beats ${computerSelection}`;
    let computerWin = `You lose this round! ${computerSelection} beats 
    ${playerSelection}`;
    if(playerSelection === computerSelection) {
        results.innerHTML = tie;
        return 'tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        results.innerHTML = playerWin;
        return 'playerWin';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        results.innerHTML = playerWin;
        return 'playerWin';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        results.innerHTML = playerWin;
        return 'playerWin';
    } else {
        results.innerHTML = computerWin;
        return 'computerWin';
    }
}


function score() {
    //new element where score would be seen
    scores.innerHTML = `player: ${playerScore} | computer: ${computerScore}`; 
    body.appendChild(scores); 
}
function gameEnd() {
if(playerScore === 5 || computerScore === 5) {
    document.querySelector('.rock').disabled = true;
    document.querySelector('.paper').disabled = true;
    document.querySelector('.scissor').disabled = true;
        if (playerScore > computerScore) {
            results.innerHTML += '<p><b>You win the game</b>';
        } else if (computerScore > playerScore) {
            results.innerHTML += '<p><b>You lose. Better luck next time!</b>';
        }
    }
}



    /*if (playerSelection === computerSelection) {
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
}*/

//function gameEnd() {

//}


/*function game() {
    for (let i = 0; i < 5; i++) {
        /*let playerSelection= prompt ("Type a selection of either rock, paper, or scissors").toLowerCase();
        if (!choice.includes(playerSelection)){
            playerSelection= prompt ("Not an option, please try again. Type a selection of either rock, paper, or scissors").toLowerCase();
        }
        const computerSelection= getComputerChoice();
        let result= playRound(playerSelection, computerSelection);
        console.log(result);
        console.log(`player score is ${playerScore} computer score is ${computerScore}`);
    }
}*/


