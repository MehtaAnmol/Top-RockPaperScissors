
const rockButton = document.querySelector(".rock-button-js");
const paperButton = document.querySelector(".paper-button-js");
const scissorButton = document.querySelector(".scissors-button-js");
const Winner = document.querySelector(".result-display-js");
const score = document.querySelector(".scores");
const startNewGame = document.querySelector(".new-game-button");


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
let count = 0;
function startGame(playerChoice){
    let computer = computersChoice();
    let player = playerChoice;
    let result= checkWinner(computer , player);
    displayChoices(player , computer);
    if(count < 6){
        count++;
        displayWinner(result, player, computer);
    }else{
        resetScores()
    }
}

function displayChoices(player, computer){
    let playerDisplay = ""
    let computerDisplay = ""
    playerDisplay += `
    <img src="images/${player}-emoji.png" class = "move-player"></img>
    `;
    computerDisplay +=`
    <img src="images/${computer}-emoji.png" class = "move-computer"></img>
    `
    document.querySelector(".player").innerHTML = playerDisplay;
    document.querySelector(".computer").innerHTML = computerDisplay;
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
let playerWon = 0;
let computerWon = 0;
let draw = 0;
function displayWinner(result, player, computer){
    
    Winner.innerHTML = "";
    let resultDisplay = "";
    if(result === 'won'){
        playerWon +=1 ;
        resultDisplay += 'Player wins';
    }else if(result === 'lost'){
        computerWon += 1;
        resultDisplay += 'Computer wins';
    }else{
        draw += 1;
        resultDisplay += 'Draw'
    }
    Winner.innerHTML = resultDisplay;
    score.innerHTML = `
        Player: ${playerWon}  Computer: ${computerWon}  draw: ${draw}; 
    `
}
function resetScores(){
    count = 0;
    playerWon = 0;
    computerWon = 0;
    draw = 0;
    let resultDisplay = "";
    score.innerHTML = `
        Player: ${playerWon}  Computer: ${computerWon}  draw: ${draw}; 
    `
}

startNewGame.addEventListener("click" , () => {
    resetScores();
})
