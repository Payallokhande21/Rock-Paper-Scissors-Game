 let userScore = 0;
let compScore = 0;

const result = document.getElementById("result");
const userScoreSpan = document.getElementById("userScore");
const compScoreSpan = document.getElementById("compScore");
const resetBtn = document.getElementById("reset");

document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("paper").addEventListener("click", () => play("paper"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));

function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const compChoice = choices[Math.floor(Math.random() * 3)];

    result.classList.remove("win", "lose", "draw");

    if (userChoice === compChoice) {
        result.innerText = "😐 It's a Draw!";
        result.classList.add("draw");
    }
    else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        userScore++;
        result.innerText = "🎉 You Win!";
        result.classList.add("win");
    }
    else {
        compScore++;
        result.innerText = "Bot Wins!";
        result.classList.add("lose");
    }

    userScoreSpan.innerText = userScore;
    compScoreSpan.innerText = compScore;
}

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreSpan.innerText = 0;
    compScoreSpan.innerText = 0;
    result.innerText = "Choose your move";
    result.classList.remove("win", "lose", "draw");
});