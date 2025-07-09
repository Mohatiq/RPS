//the logic to get the computer choice
let humanScore=0;
let computerScore=0;
let roundCount=0;
const maxRound=5;
function getComputerChoice(){
    let number = Math.random();
    if (number<1/3){
        return "paper";
    }else if (number<2/3){
        return "rock";
    }else{
        return "scissors";
    }
}
//the logic to get the human choice
function getHumanChoice(humanChoice){
    let computerSelection=getComputerChoice();
    document.getElementById("player").textContent=humanChoice;
    document.getElementById("computer").textContent=computerSelection;
    let result='';
    if (computerSelection===humanChoice){
        result="it's a tie";
    }
    else if((humanChoice==='rock' && computerSelection==='scissors')||(humanChoice==='paper' && computerSelection==='rock')||(humanChoice==='scissors' && computerSelection==='paper')){
        result="congrats you won";
        humanScore++;
    }else{
        result="Oopss you lost!";
        computerScore++;
    }
    roundCount++;

    document.getElementById("result").textContent =
    `${result} | Round: ${roundCount}/${maxRound} | You ${humanScore} - ${computerScore} Computer`;

    if(roundCount===maxRound){
        let final_message='';
        if (humanScore>computerScore){
            finalMessage = "🎉 You win the game!";
        } else if (computerScore > humanScore) {
          finalMessage = "💻 Computer wins the game!";
        } else {
          finalMessage = "🤝 It's a draw!";
        }
    
        document.getElementById("result").textContent += `\n${finalMessage}`;
      }
    }



    
