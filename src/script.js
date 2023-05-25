import {
    generateComputerChoice,
    determineWinner,
    displayResult,
    gameDelay,
} from "./static/rpsLogic.js";

const body = document.body;

const main = document.createElement("main");
main.setAttribute("id", "main");
main.style.cssText = `
    background-image: url("./assets/background.svg");
`;

const rpsContainer = document.createElement("div");
rpsContainer.setAttribute("class", "rps-container");
const armContainer = document.createElement("div");
armContainer.setAttribute("class", "arm-container");

const playerOne = document.createElement("div");
playerOne.setAttribute("class", "player-one");
const playerOneChoice = document.createElement("img");
playerOneChoice.setAttribute("id", "player-one-img");
playerOneChoice.src = "./assets/icons/nani.svg";
playerOne.append(playerOneChoice);

const vsTextContainer = document.createElement("div");

const vsText = document.createElement("h1");
vsText.setAttribute("id", "vsText");
vsText.innerText = "V.S";
vsTextContainer.append(vsText);

const playerTwo = document.createElement("div");
playerTwo.setAttribute("class", "player-two");
const playerTwoChoice = document.createElement("img");
playerTwoChoice.setAttribute("id", "player-two-img");
playerTwoChoice.src = "./assets/icons/nani.svg";
playerTwo.append(playerTwoChoice);

armContainer.append(playerOne, vsTextContainer, playerTwo);

const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("class", "button-container");

function createButtons() {
    const buttonLabels = ["", "Rock", "Paper", "Scissors"];
    const buttonFunctions = {
        Rock: Rock,
        Paper: Paper,
        Scissors: Scissors,
    };

    for (let i = 1; i <= 3; i++) {
        const button = document.createElement("button");
        const iconButton = document.createElement("img");
        const buttonId = `${buttonLabels[i]}-button`;

        button.innerText = buttonLabels[i];
        iconButton.src = `./assets/icons/${buttonLabels[i]}.png`;

        button.id = buttonId;
        button.appendChild(iconButton);
        buttonContainer.appendChild(button);

        button.addEventListener("click", function () {
            buttonFunctions[buttonLabels[i]]();
        });
    }

    function Rock() {
        const playerChoice = "rock";
        const playerImg = document.getElementById("player-one-img");
        playerImg.src = `./assets/hands/${playerChoice}.svg`;

        const computerChoice = generateComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);
        displayResult(winner);

        setTimeout(gameDelay, 3000);
    }

    function Paper() {
        const playerChoice = "rock";
        const playerImg = document.getElementById("player-one-img");
        playerImg.src = `./assets/hands/${playerChoice}.svg`;

        const computerChoice = generateComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);
        displayResult(winner);

        setTimeout(gameDelay, 3000);
    }

    function Scissors() {
        const playerChoice = "rock";
        const playerImg = document.getElementById("player-one-img");
        playerImg.src = `./assets/hands/${playerChoice}.svg`;

        const computerChoice = generateComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);
        displayResult(winner);

        setTimeout(gameDelay, 3000);
    }
}

createButtons();

rpsContainer.append(armContainer, buttonContainer);

main.append(rpsContainer);
body.append(main);
