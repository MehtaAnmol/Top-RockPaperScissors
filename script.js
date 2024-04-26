
const rockButton = document.querySelector(".rock-button-js");
const paperButton = document.querySelector(".paper-button-js");
const scissorButton = document.querySelector(".scissors-button-js");


function computersChoice(){
    let value = Math.floor(Math.random() * 3) + 1;
    if( value === 1 ) return "rock";
    if( value === 2 ) return "paper";
    else return 'scissors';
}

rockButton.addEventListener("click", () =>{
    startGame('rock');
});
paperButton.addEventListener("click", () =>{
    startGame('paper');
});
scissorButton.addEventListener("click", () =>{
    startGame('scissors');
});
let count = 1;
function startGame(playerChoice){
    let computer = computersChoice();
    let player = playerChoice;
    let result= checkWinner(computer , player);
    if(count < 6){
        count++;
        displayWinner(result, player, computer);
        
        console.log(count);
    }else{
        startNewGame();
    }
}

function checkWinner(computer, player){
    if(player === 'rock'){
        if(computer === 'rock') return 'draw';
        if(computer === 'paper') return 'lost';
        if(computer === 'scissors') return 'won';
    }if(player === 'paper'){
        if(computer === 'rock') return 'won';
        if(computer === 'paper') return 'draw';
        if(computer === 'scissors') return 'lost';
    }else{
        if(computer === 'rock') return 'lost';
        if(computer === 'paper') return 'won';
        if(computer === 'scissors') return 'draw';
    }
}

function displayWinner(result, player, computer){
    // console.log(result)
    // console.log(`player : ${player}  computer : ${computer}`)
    let playerDisplay = "";
    let computerDisplay = "";
    let resultDisplay = "";
    playerDisplay += player;
    computerDisplay += computer;
    
    if(result === 'won'){
        resultDisplay += 'Player wins';
    }else if(result === 'lost'){
        resultDisplay += 'Computer wins';
    }else{
        resultDisplay += 'Draw'
    }
     
    document.querySelector(".player-choice-js").innerHTML = playerDisplay;
    document.querySelector(".computer-choice-js").innerHTML = computerDisplay;
    document.querySelector(".result-display-js").innerHTML = resultDisplay;
}
function startNewGame(){
    count = 0;
}