let userScore = 0;
let compScore = 0;

const choicess = document.querySelectorAll(".choice");
const message= document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice =() => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);                             //Math.floor(Math.random() * 3)  iss se koi bhi random number computer se generate hoga pr wo 0 se 1 ke bich mai koi random no.hoga isliye humne  multiply by three kiye hai taki 1 se 2 ke bich mai koi bhi hum generate ho
    return options[randIdx];                             
};

const drawGame = ()=>{
    message.innerText = "Game was Draw. Play again."
    message.style.backgroundColor = "#081b31";
}

const showWinner =(userWin,userChoice, compChoice) =>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        message.innerText = `You lose.  ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

if(userChoice === compChoice) {
    drawGame()
} else{
    let userWin = true;
    if(userChoice==="rock"){
        userWin =compChoice === "paper" ? false: true;
    }else if(userChoice==="paper"){
        userWin =compChoice === "scissors" ? false: true;
    }else{
        userWin = compChoice ==="rock" ? false: true;
    }
    showWinner(userWin, userChoice, compChoice);
}
};   

choicess.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
});