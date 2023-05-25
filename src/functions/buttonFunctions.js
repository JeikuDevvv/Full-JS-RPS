import {
    generateComputerChoice,
    determineWinner,
    displayResult,
} from "./rpsLogic.js";

export const Rock = () => {
    const playerChoice = "rock";
    document.getElementById(
        "player-one-img"
    ).src = `./assets/icons/${playerChoice}.png`;
    let computerChoice = generateComputerChoice();
    let winner = determineWinner(playerChoice, computerChoice);
    displayResult(winner);
};

export const Paper = () => {
    const playerChoice = "paper";
    document.getElementById(
        "player-one-img"
    ).src = `./assets/icons/${playerChoice}.png`;
    let computerChoice = generateComputerChoice();
    let winner = determineWinner(playerChoice, computerChoice);
    displayResult(winner);
};

export const Scissors = () => {
    const playerChoice = "scissors";
    document.getElementById(
        "player-one-img"
    ).src = `./assets/icons/${playerChoice}.png`;
    let computerChoice = generateComputerChoice();
    let winner = determineWinner(playerChoice, computerChoice);
    displayResult(winner);
};
