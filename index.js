const computerPlay = () => {
    const randomNumber = (Math.floor(Math.random() * 3))
    if (randomNumber === 0) {
        return 'rock';
    }
    else if (randomNumber === 1) {
        return 'paper';
    }
    else if (randomNumber === 2) {
        return 'scissors';
    }
}
const playerSelection = () => {
    const pChoose = prompt("Enter rock, paper or scissors: "); 
    const playerChoose = pChoose.toLowerCase();
    

    if(playerChoose !== 'rock' && playerChoose !== 'scissors' && playerChoose !== 'paper'){
        alert("You choose bad input, try again!"); 
        return playerSelection();
    }
    else return playerChoose;
}

function playRound(cPlay, pPlay){ 
    if(cPlay === pPlay){
        return "The game is a draw"
    }
    else if (cPlay === 'rock' && pPlay === 'paper' || 
             cPlay === 'paper' && pPlay === 'scissors' ||
             cPlay === 'scissors' && pPlay === 'rock'
             ){ 
                return "Player Win!"
             }
             else {
                return "Computer Win!"
             }
}

let playerWin = 0;
let computerWin = 0;
let gameTied = 0;
function game() {
    for (let i = 0; i < 5; i++) {
        const player = playerSelection();
        const computer = computerPlay();
        console.log(`Computer choose: ${computer}`);
        console.log(`Player choose: ${player}`);
        const result = playRound(computer, player); 
        console.log(result); 
        if(result === 'Player Win!'){
            playerWin++;
        }
        else if(result === 'Computer Win!'){
            computerWin++;
        }
        else gameTied++;
    }
}
game();
console.log(`Player won ${playerWin} game/s AND Computer won ${computerWin} game/s. We have ${gameTied} draws`)
if (playerWin > computerWin) {
    console.log('Player win!');
}
else if (computerWin > playerWin) {
    console.log('Computer win!');
}
else {
    console.log('There is no winner!')
}

