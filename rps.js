//the logic to get the computer choice
let humanScore=0;
let computerScore=0;
function getComputerChoice(){
    let number = Math.random();
    if (number<1/3){
        return "paper";
    }else if (number<2/3){
        return "rock";
    }else{
        return " scissors";
    }
}
//the logic to get the human choice
function getHumanChoice(){
    let choice = prompt("Please enter your choice: ");
    let playerchoice = choice.toLowerCase();
    if (playerchoice=== "paper" || playerchoice === "rock" || playerchoice ==="scissors"){
        return playerchoice;
    }else{
        alert("invalid statement. Please choose again:");
        return getComputerChoice();
    }
}
function playRound(humanChoice,ComputerChoice){
    if (humanChoice === ComputerChoice){
        console.log( "This tound is a tie");
    }else if((humanChoice=='rock' && ComputerChoice=='scissors')||(humanChoice=='paper' && ComputerChoice=='rock')||(humanChoice=='scissors' && ComputerChoice=='paper')){
        console.log("Congrats. You won!!! ;)");
        humanScore++;
    }else{
        console.log( "Oups,the machine Won");
        computerScore++;
    }
}
function playGame(){
    for(let i=0;i<5;i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(`You are in round ${i+1}:`);
    playRound(humanSelection, computerSelection);}
    if(humanScore>computerScore){
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game. Better luck next time!");
    } else {
        console.log("It's a draw!");
    }
}

playGame();

    
