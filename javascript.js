// console.log("Hello, World!");
// This is a simple JavaScript file that logs "Hello, World!" to the console.

/*
Step 2: Write the logic to get the computer choice, use math random to generate
Step 3: Write the logic to get the human choice, use prompt to get the user input
Step 4: Declare the players score variables
Step 5: Write the logic to play a single round, create funciton to decide winner, display winner, add humanscore and computerscore
Step 6: Write the logic to play the entire game
*/

// Step 2: Write the logic to get the computer choice, use math random to generate
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Step 3: Write the logic to get the human choice, use prompt to get the user input
function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    } while (!["rock", "paper", "scissors"].includes(choice));
    return choice;
}
//     choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
//     return choice;
// }

// Step 4: Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round, create function to decide winner, display winner, add humanscore and computerscore
function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log("You lose! " + humanChoice + " beats " + computerChoice);
        computerScore++;
    }
  }
  
//   const humanSelection = getHumanChoice();
//   const computerSelection = getComputerChoice();
  


//   playRound(humanSelection, computerSelection);
  

// Step 6: Write the logic to play the entire game
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Final Score: Human " + humanScore + " - Computer " + computerScore);
}

playGame()