function generateComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = randomInteger(0, 2);
    if (choices[randomIndex] === "rock") {
        document.getElementById(
            "player-two-img"
        ).src = `./assets/hands/rock.svg`;
    }
    if (choices[randomIndex] === "paper") {
        document.getElementById(
            "player-two-img"
        ).src = `./assets/hands/paper.svg`;
    }
    if (choices[randomIndex] === "scissors") {
        document.getElementById(
            "player-two-img"
        ).src = `./assets/hands/scissors.svg`;
    }
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(result) {
    document.getElementById("vsText").innerText = `${result}`;
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function reloadPage() {
    for (let i = 0; i < 3; i++) {
        await sleep(i * 1000);
    }
    window.location.reload();
}

function gameDelay() {
    const rockButton = document.getElementById("rock-button");
    const paperButton = document.getElementById("paper-button");
    const scissorsButton = document.getElementById("scissors-button");

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    reloadPage();

    setTimeout(() => {
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
    }, 4000);
}

export const Rock = () => {
    let playerChoice = "rock";
    document.getElementById(
        "player-one-img"
    ).src = `./assets/hands/${playerChoice}.svg`;
    let computerChoice = generateComputerChoice();
    let winner = determineWinner(playerChoice, computerChoice);
    displayResult(winner);
    gameDelay();
};

export const Paper = () => {
    let playerChoice = "paper";
    document.getElementById(
        "player-one-img"
    ).src = `./assets/hands/${playerChoice}.svg`;
    let computerChoice = generateComputerChoice();
    let winner = determineWinner(playerChoice, computerChoice);
    displayResult(winner);
    gameDelay();
};

export const Scissors = () => {
    let playerChoice = "scissors";
    document.getElementById(
        "player-one-img"
    ).src = `./assets/hands/${playerChoice}.svg`;
    let computerChoice = generateComputerChoice();
    let winner = determineWinner(playerChoice, computerChoice);
    displayResult(winner);
    gameDelay();
};
