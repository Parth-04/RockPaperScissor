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


btnPaper.addEventListener('click',() => {
    let result = playRound(getComputerChoice(), btnPaper.textContent);
    switch(result){
        case 0:
            var resultP = document.createElement('p');
            resultP.textContent = "It's a draw!";
            resultDiv.appendChild(resultP);
            break;
        case 1:
            var resultP = document.createElement('p');
            resultP.textContent = "You Win!";
            resultDiv.appendChild(resultP);
            break;
        case -1:
            var resultP = document.createElement('p');
            resultP.textContent = "You lose!";
            resultDiv.appendChild(resultP);
            break;
    }
});

btnRock.addEventListener('click',() => {
    let result = playRound(getComputerChoice(), btnRock.textContent);
    switch(result){
        case 0:
            var resultP = document.createElement('p');
            resultP.textContent = "It's a draw!";
            resultDiv.appendChild(resultP);
            break;
        case 1:
            var resultP = document.createElement('p');
            resultP.textContent = "You Win!";
            resultDiv.appendChild(resultP);
            break;
        case -1:
            var resultP = document.createElement('p');
            resultP.textContent = "You lose!";
            resultDiv.appendChild(resultP);
            break;
}});

btnScissor.addEventListener('click',() => {
    let result = playRound(getComputerChoice(), btnRock.textContent);
    switch(result){
        case 0:
            var resultP = document.createElement('p');
            resultP.textContent = "It's a draw!";
            resultDiv.appendChild(resultP);
            break;
        case 1:
            var resultP = document.createElement('p');
            resultP.textContent = "You Win!";
            resultDiv.appendChild(resultP);
            break;
        case -1:
            var resultP = document.createElement('p');
            resultP.textContent = "You lose!";
            resultDiv.appendChild(resultP);
            break;
}});

let resultDiv = document.createElement('div');
resultDiv.setAttribute('class','result');

document.querySelector('body').insertBefore(resultDiv, document.querySelector('script'));
