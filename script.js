let computerScore = 0;
let humanScore = 0;



function getComputerChoice() {
    
    let choice = 3 * Math.random();
    
    if (choice <= 1) {
        choice = 'rock';
    } else if (choice >1 && choice <=2) {
        choice = 'paper';
    } else {
        choice = 'scissor';
    }

    return(choice)
}

/*console.log(getComputerChoice())*/

function getHumanChoice() {
    let humanChoice = prompt('rock?, paper?, scissor?:')
    return(humanChoice.toLowerCase());
}

/*console.log(getHumanChoice())*/

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'scissor') {
        humanScore = humanScore + 1;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
    } else if (humanChoice == 'scissor' && computerChoice == 'paper') {
        humanScore = humanScore + 1;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore = humanScore + 1;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
    } else if (humanChoice == computerChoice) {
        console.log('Tie, please play again!')
    }  else {
        computerScore = computerScore + 1;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
    }
    console.log(humanChoice)
    console.log(computerChoice)
}

console.log(playRound(getComputerChoice(), getHumanChoice()))

console.log(computerScore)
console.log(humanScore)