function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*3)]
}

function playRound(computerSelection, playerSelection) {
    console.log(computerSelection);
    console.log(playerSelection)
    playerSelection.toLowerCase()
    play = true;
    while (play == true){

        if (computerSelection == 'rock'){
            if (playerSelection == 'rock'){
                play = true;
                return ("It's a tie, both you and the computer entered " + playerSelection);
            }
            else if (playerSelection == 'paper'){
                play = false;
                return ("You Win! " + playerSelection + " beats " + computerSelection + "!");
            }
            else if (playerSelection == 'scissors'){
                play = false
                return ("You Lose! " + computerSelection + " beats " + playerSelection + "!");
            }
            else {
                play = false
                return ("Enter a valid input");
            }
        }

        if (computerSelection == 'paper'){
            if (playerSelection == 'paper'){
                play = true;
                return ("It's a tie, both you and the computer entered " + playerSelection);
            }
            else if (playerSelection == 'scissors'){
                play = false;
                return ("You Win! " + playerSelection + " beats " + computerSelection + "!");
            }
            else if (playerSelection == 'rock'){
                play = false
                return ("You Lose! " + computerSelection + " beats " + playerSelection + "!");
            }
            else {
                play = false
                return ("Enter a valid input");
            }
        }

        if (computerSelection == 'scissors'){
            if (playerSelection == 'scissors'){
                play = true;
                return ("It's a tie, both you and the computer entered " + playerSelection);
            }
            else if (playerSelection == 'rock'){
                play = false;
                return ("You Win! " + playerSelection + " beats " + computerSelection + "!");
            }
            else if (playerSelection == 'paper'){
                play = false
                return ("You Lose! " + computerSelection + " beats " + playerSelection + "!");
            }
            else {
                play = false
                return ("Enter a valid input");
            }
        }
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(computerSelection, playerSelection));