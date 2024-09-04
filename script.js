let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const resultText = document.getElementById("result-text");
  const scoreText = document.getElementById("score");

  if (playerChoice === computerChoice) {
    resultText.textContent = `It's a Draw! You both chose ${playerChoice}.`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    resultText.textContent = `You Win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultText.textContent = `You Lose! ${computerChoice} beats ${playerChoice}.`;
  }

  scoreText.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;

  // Special Effects for Result Text
  resultText.style.opacity = "0";
  resultText.style.transform = "translateY(-10px)";
  setTimeout(() => {
    resultText.style.opacity = "1";
    resultText.style.transform = "translateY(0)";
  }, 100);
}
