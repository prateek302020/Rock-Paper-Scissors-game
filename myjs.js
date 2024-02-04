let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score"); 


const showWinner = (userwin ,userchoice, compChoice) => {
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `you lose ${compChoice} beats ${userchoice}`;;
        msg.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "game Draw";
    msg.style.backgroundColor = "#081b31";
}
const gencompchoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compChoice = gencompchoice();
    console.log("comp choice =", compChoice);
    if(userchoice === compChoice){
    // draw-game
   drawGame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
               userwin = compChoice === "scissors" ? false : true;
        }
        else{
          userwin =   compChoice === "rock" ? false : true;
        }
        showWinner(userwin , userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
    console.log("Choice was clicked", userchoice);
    playgame(userchoice);
    });
});