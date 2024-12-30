let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw! Play Again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userchoice , compchoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats computer's ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You lose! Computer's ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userchoice) => {

    //Generate computer choice 

    const compchoice = genComputerChoice();

    if(userchoice === compchoice){
        // Draw Game
        drawGame();
    } else{
        let userWin = true;
        if(userchoice ==="rock"){
            // scissors , paper
           userWin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            //rock , scissors
            userWin = compchoice === "scissors" ? false : true;
        }else{
            //rock , paper
           userWin = compchoice ==="rock" ? false : true;
        }
        showWinner(userWin , userchoice , compchoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);

    });
});