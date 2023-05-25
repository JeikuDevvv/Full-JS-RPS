export function generateComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = randomInteger(0, 2);
    const playerTwoImg = document.getElementById("player-two-img");
    if (playerTwoImg) {
        playerTwoImg.src = `./assets/icons/${choices[randomIndex]}.png`;
    }
    return choices[randomIndex];
}

export function determineWinner(player, computer) {
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

export function displayResult(result) {
    const vsText = document.getElementById("vsText");
    if (vsText) {
        vsText.innerText = result;
    }
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function gameDelay() {
    const rockButton = document.getElementById("rock-button");
    const paperButton = document.getElementById("paper-button");
    const scissorsButton = document.getElementById("scissors-button");

    if (rockButton && paperButton && scissorsButton) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        await sleep(3000);

        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
