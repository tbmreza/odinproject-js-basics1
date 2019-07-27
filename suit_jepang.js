const space = ["rock", "paper", "scissors"];

function computerPlay() {
  
  if (Math.random() > 0.5) {
    // Random number 1-3 inclusive
    randIndex = Math.floor(Math.random() * 2) + 1;
  } else {
    randIndex = Math.ceil(Math.random() * 2) + 1;
  }

  return space[randIndex-1];
}

function playRound(playerSelection, computerSelection) {
  
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return "Tie.";

        case "paper":
          return "You Lose! Paper beats Rock";

        case "scissors":
          return "You Win! Rock beats Scissors";
      }
    case "paper":
      switch (computerSelection) {
        case "rock":
          return "You Win! Paper beats Rock";
          
        case "paper":
          return "Tie.";

        case "scissors":
          return "You Lose! Scissors beats Paper";
      }
    case "scissors":
      switch (computerSelection) {
        case "rock":
          return "You Lose! Rock beats Scissors";

        case "paper":
          return "You Win! Scissors beats Paper";

        case "scissors":
          return "Tie.";
      }      
  }
}

// const playerSelection = 'rock'
// console.log(playRound(playerSelection, computerPlay()))



function game() {
  // Best of five rounds/first to get three.
  // While computer or player score < 3, play playRound.
  // If playRound startswith You Win, playerScore++;
  
  let computerScore = 0;
  let playerScore = 0;
    
  while (computerScore < 3 && playerScore < 3) {
    scoreBoard();
  }
  
  function scoreBoard() {
    
    let computerSelection = computerPlay();

    let playerSelection = "";
    let playerInput = prompt('1: rock, 2: paper, 3: scissors').toLowerCase();
    switch (playerInput) {
      case "1":
        playerSelection = "rock";
        break;
      case "2":
        playerSelection = "paper";
        break;
      case "3":
        playerSelection = "scissors";
        break;
      
      default:
        playerSelection = playerInput;
        break;
    }
    
    let roundPlayed = "";
    roundPlayed = playRound(playerSelection, computerSelection);
    console.log(roundPlayed);
    
    if (roundPlayed.startsWith("You Win")) {
      playerScore++;
    }
    if (roundPlayed.startsWith("You Lose")) {
      computerScore++;
    }
  }

  let trophyComputer = "";
  let trophyPlayer = "";

  if (computerScore > playerScore) {
    trophyComputer = "🏆";
  } else {
    trophyPlayer = "🏆";
  }
  console.log("Computer: "+computerScore+trophyComputer+"\nPlayer: "+playerScore+trophyPlayer)
}
      
        
game();