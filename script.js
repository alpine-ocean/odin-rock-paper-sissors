

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


function playGame() {
    let computerScore = 0;
    let humanScore = 0;

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
            console.log('Tie!')
        }  else {
            computerScore = computerScore + 1;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        }

    }

    /*Round 1*/
    playRound(getComputerChoice(), getHumanChoice())
    console.log(`Computer Score: ${computerScore}`)
    console.log(`Human Score: ${humanScore}`)

    /*Round 2*/
    playRound(getComputerChoice(), getHumanChoice())
    console.log(`Computer Score: ${computerScore}`)
    console.log(`Human Score: ${humanScore}`)

    /*Round 3*/
    playRound(getComputerChoice(), getHumanChoice())
    console.log(`Computer Score: ${computerScore}`)
    console.log(`Human Score: ${humanScore}`)

    /*Round 4*/
    playRound(getComputerChoice(), getHumanChoice())
    console.log(`Computer Score: ${computerScore}`)
    console.log(`Human Score: ${humanScore}`)

    /*Round 5*/
    playRound(getComputerChoice(), getHumanChoice())
    console.log(`Computer Score: ${computerScore}`)
    console.log(`Human Score: ${humanScore}`)

    if (humanScore > computerScore) {
        console.log("Congratulations, you win!!");
    } else if (humanScore == computerScore) {
        console.log("Tie, please try again!!");
    } else {
        console.log("You lose, try again!!");
    }
}

playGame()