const computerPlay = () => {
    const randomNumber = (Math.floor(Math.random() * 3))
    if (randomNumber === 0) {
        return 'rock';
    }
    else if (randomNumber === 1) {
        return 'paper';
    }
    else if (randomNumber === 2) {
        return 'scissor';
    }
}
// console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("The Game is Tied")
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            // console.log('The computer wins!');
            return 'The computer wins!'
        }
        else {
            return 'You won!';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'The computer wins!';
        }
        else {
            return 'You won!';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'The computer wins!';
        }
        else {
            return 'You won!';
        }
    }
}


let playerWin = 0;
let computerWin = 0;
let gameTied = 0;
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`Round ${i}: Enter either Rock, Paper or Scissors`).toLowerCase();
        const computerSelection = computerPlay();
        const output = playRound(playerSelection, computerSelection)
        console.log(output)
        if (output === 'The computer wins!') {
            // console.log(output)
            computerWin++;
        }
        else if (output === 'You won!') {
            playerWin++;
        }
        else gameTied++;
    }
}
game();
console.log(`Player won ${playerWin} game/s AND Computer won ${computerWin} game/s`)
if (playerWin > computerWin) {
    console.log('Player win!');
}
else if (computerWin > playerWin) {
    console.log('Computer win!');
}
else {
    console.log('There is no winner!')
}




// console.log(playRound(playerSelection, computerSelection))