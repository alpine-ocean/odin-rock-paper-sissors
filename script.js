


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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'scissor') {
        humanScore = humanScore + 1;
        roundResult.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice == 'scissor' && computerChoice == 'paper') {
        humanScore = humanScore + 1;
        roundResult.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore = humanScore + 1;
        roundResult.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice == computerChoice) {
        roundResult.textContent = 'Tie!';
    }  else {
        computerScore = computerScore + 1;
        roundResult.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
    }
}



// Storing elements and setting some of their initial states
const btns = document.querySelectorAll('button');
const humanPoints = document.querySelector('#humanPoints');
const computerPoints = document.querySelector('#computerPoints');
const round = document.querySelector('#round');
const roundResult = document.querySelector('#roundResult');
round.textContent = `Round number:`
humanPoints.textContent = `Human points: ${0}`;
computerPoints.textContent = `Computer points: ${0}`;
const results = document.querySelector('#results');

// initializing variables
let humanChoice;
let computerChoice;
let computerScore = 0;
let humanScore = 0;
let clickCount = 0;


function playGame () {

    
    btns.forEach((button) => {
        button.addEventListener('click', (event) => {
            // get choices
            humanChoice = event.target.id;
            computerChoice = getComputerChoice();
            
            //Play round
            playRound(humanChoice, computerChoice);
            
            
            // Update User Interface
            
            round.textContent = `Round number: ${1+ clickCount}`;
            humanPoints.textContent = `Human points: ${humanScore}`;
            computerPoints.textContent = `Computer points: ${computerScore}`;
            results.textContent = '';
            clickCount++;
            

            // Results logic and resetting the game
            if (clickCount === 5) {
                if (humanScore > computerScore) {
                results.textContent = "Congratulations, you win!!";
                //reset Variables
                clickCount = 0;
                humanScore = 0;
                computerScore = 0;
                } else if (humanScore == computerScore) {
                results.textContent = "Tie, please try again!!";
                 //reset Variables
                clickCount = 0;
                humanScore = 0;
                computerScore = 0;
                } else {
                results.textContent = "You lose, try again!!";
                 //reset Variables
                clickCount = 0;
                humanScore = 0;
                computerScore = 0;
                };
            }
        });
    });   
};

playGame();
