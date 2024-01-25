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


function game(){
    var i = 0;
    var playerScore = 0;
    while (i < 5){
        let playerSelection = prompt("Enter your choice: ", "Rock / Paper / Scissors");
        result = game(getComputerChoice(), playerSelection);
        if (result == 1){
            alert("Your Win Round " + String(parseInt(i+1)) + "!");
            i += 1;
            player += 1;
        }
        else if (result == -1){
            alert("Computer Wins Round " + String(parseInt(i+1)) + "!");
            i += 1;
        }
        else if (result == 10){
            alert("Please enter a valid input and try again!");
        }
    }

    if (playerScore > 1){   
        alert("You Win the Game!")
    }
    else{
        alert("Try Again Later, Computer Wins!");
    }
}

game();