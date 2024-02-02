function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*3)]
}

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(`Computer Selection - ${computerSelection}`);
    console.log(`Player Selection -  ${playerSelection}`);
    play = true;
    while (play == true){

        if (computerSelection == 'rock'){
            if (playerSelection == 'rock'){
                play = true;
                return 0;
            }
            else if (playerSelection == 'paper'){
                play = false;
                return 1;
            }
            else if (playerSelection == 'scissors'){
                play = false
                return -1;
            }
        }

        if (computerSelection == 'paper'){
            if (playerSelection == 'paper'){
                play = true;
                return 0;
            }
            else if (playerSelection == 'scissors'){
                play = false;
                return 1;
            }
            else if (playerSelection == 'rock'){
                play = false
                return -1;
            }
        }

        if (computerSelection == 'scissors'){
            if (playerSelection == 'scissors'){
                play = true;
                return 0;
            }
            else if (playerSelection == 'rock'){
                play = false;
                return 1;
            }
            else if (playerSelection == 'paper'){
                play = false
                return -1;
            }
        }
    }

}

let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissor = document.querySelector('#scissor');

let playerScore = 0;
let computerScore = 0;
let i = 0;


function game(){
    btnPaper.addEventListener('click',() => {
        let playerChoice = btnPaper.textContent;
        let computerChoice = getComputerChoice();
        let result = playRound(computerChoice, btnPaper.textContent);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1,);
        console.log(computerChoice,playerChoice);
        switch(result){
            case 0:
                i += 1;
                var resultP = document.createElement('p');
                resultP.innerHTML = `You Played: ${playerChoice} <br>Computer Played: ${computerChoice}.<br>It's a draw! 
                <br>Score: <br>Player Score: ${playerScore} <br>Computer Score: ${computerScore}`;
                resultDiv.appendChild(resultP);
                break;
            case 1:
                var resultP = document.createElement('p');
                playerScore += 1;
                resultP.innerHTML = `You Played: ${playerChoice} <br> Computer Played: ${computerChoice}. <br>You Win!
                <br>Score: <br>Player Score: ${playerScore} <br>Computer Score: ${computerScore}`;
                resultDiv.appendChild(resultP);
                break;
            case -1:
                var resultP = document.createElement('p');
                computerScore += 1;
                resultP.innerHTML = `You Played: ${playerChoice} <br>Computer Played: ${computerChoice}. <br>You lose!
                <br>Score: <br>Player Score: ${playerScore} <br>Computer Score: ${computerScore}`;
                resultDiv.appendChild(resultP);
                break;
        }
    });

    btnRock.addEventListener('click',() => {
        let playerChoice = btnRock.textContent
        let computerChoice = getComputerChoice();
        let result = playRound(computerChoice, playerChoice);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1,);
        console.log(computerChoice,playerChoice);
        switch(result){
            case 0:
                i += 1;
                var resultP = document.createElement('p');
                resultP.innerHTML = `You Played: ${playerChoice} <br>Computer Played: ${computerChoice}.<br>It's a draw! 
                <br>Score: <br>Player Score: ${playerScore} <br>Computer Score: ${computerScore}`;
                resultDiv.appendChild(resultP);
                break;
            case 1:
                var resultP = document.createElement('p');
                playerScore += 1;
                resultP.innerHTML = `You Played: ${playerChoice} <br> Computer Played: ${computerChoice}. <br>You Win!
                <br>Score: <br>Player Score: ${playerScore} <br>Computer Score: ${computerScore}`;
                resultDiv.appendChild(resultP);
                break;
            case -1:
                var resultP = document.createElement('p');
                computerScore += 1;
                resultP.innerHTML = `You Played: ${playerChoice} <br>Computer Played: ${computerChoice}. <br>You lose!
                <br>Score: <br>Player Score: ${playerScore} <br>Computer Score: ${computerScore}`;
                resultDiv.appendChild(resultP);
                break;
    }});

    btnScissor.addEventListener('click',() => {
        let playerChoice = btnScissor.textContent
        let computerChoice = getComputerChoice();
        let result = playRound(computerChoice, playerChoice);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1,);
        console.log(computerChoice,playerChoice);
        switch(result){
            case 0:
                i += 1;
                var resultP = document.createElement('p');
                resultP.innerHTML = `You Played: ${playerChoice} <br>Computer Played: ${computerChoice}.<br>It's a draw!
                <br>Score: <br>Player Score: ${playerScore} <br>Computer Score: ${computerScore}`;
                resultDiv.appendChild(resultP);
                break;
            case 1:
                var resultP = document.createElement('p');
                playerScore += 1;
                resultP.innerHTML = `You Played: ${playerChoice} <br> Computer Played: ${computerChoice}. <br>You Win!
                <br>Score: <br>Player Score: ${playerScore} <br>Computer Score: ${computerScore}`;
                resultDiv.appendChild(resultP);            
                break;
            case -1:
                var resultP = document.createElement('p');
                computerScore += 1;
                resultP.innerHTML = `You Played: ${playerChoice} <br>Computer Played: ${computerChoice}. <br>You lose!
                <br>Score: <br>Player Score: ${playerScore} <br>Computer Score: ${computerScore}`;
                resultDiv.appendChild(resultP);
                break;
    }});
}

if (computerScore === 5){
    var finalResult = document.createElement('p');
    finalResult.textContent = 'Computer Wins the Game!';
    resultDiv.appendChild(finalResult);
}
else if (playerScore === 5) {
    var finalResult = document.createElement('p');
    finalResult.textContent = 'You Wins the Game!';
    resultDiv.appendChild(finalResult);
}

let resultDiv = document.createElement('div');
resultDiv.setAttribute('class','result');

document.querySelector('body').insertBefore(resultDiv, document.querySelector('script'));
