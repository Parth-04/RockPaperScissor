function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*3)]
}

function playRound(computerSelection, playerSelection) {
    console.log(`Computer Selection - ${computerSelection}`);
    console.log(`Player Selection -  ${playerSelection}`);
    playerSelection.toLowerCase()
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
            else {
                play = false
                return 10;
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
            else {
                play = false
                return 10;
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
            else {
                play = false
                return 10;
            }
        }
    }

}

let btnRock = document.querySelector('#rock');
let btnPaper = document.querySelector('#paper');
let btnScissor = document.querySelector('#scissor');

btnPaper.addEventListener('click',() => {console.log(playRound(getComputerChoice(), btnPaper.textContent))});
btnRock.addEventListener('click',() => {console.log(playRound(getComputerChoice(), btnRock.textContent))});
btnScissor.addEventListener('click',() => {console.log(playRound(getComputerChoice(), btnScissor.textContent))});
