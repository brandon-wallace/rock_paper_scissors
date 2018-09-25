let userInput = prompt('rock, paper, or scissors?');
userInput = userInput.toLowerCase();


const getUserChoice = (userInput) => {
  if (userInput === 'rock') {
    return userInput;
  } else if (userInput === 'paper') {
    return userInput;
  } else if (userInput === 'scissors') {
    return userInput;
  } else if (userInput === 'volcano') {
    return userInput;
  } else {
    alert('Error!');
  }
}


const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return 'rock';
  } else if (choice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}


const determineWinner = (userChoice, computerChoice) => {
  // User can cheat with word 'volcano'.
  if (userChoice === 'volcano') {
    return "Volcano melts everything!!!! User wins!!!!"
  }
  if (userChoice === computerChoice) {
    return "TIE! No one wins.";
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }
}


const playGame = () => {
  let userChoice = getUserChoice(userInput);
  // Check for invalid input.
  if (!userChoice) {
    return;
  }
  let computerChoice = getComputerChoice();
  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}


playGame();
