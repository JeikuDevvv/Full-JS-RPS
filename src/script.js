import { Rock, Paper, Scissors } from "./static/functions.js";

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
    for (let i = 1; i <= 3; i++) {
        const button = document.createElement("button");
        const buttonLabel = ["uwu", "rock", "paper", "scissors"];
        let buttonId = "";
        if (i === 1) {
            buttonId = `${buttonLabel[1]}-button`;
            button.innerText = `${buttonLabel[1]}`;
        }
        if (i === 2) {
            buttonId = `${buttonLabel[2]}-button`;
            button.innerText = `${buttonLabel[2]}`;
        }
        if (i === 3) {
            buttonId = `${buttonLabel[3]}-button`;
            button.innerText = `${buttonLabel[3]}`;
        }

        button.id = buttonId;
        buttonContainer.append(button);
    }
}

createButtons();

rpsContainer.append(armContainer, buttonContainer);

main.append(rpsContainer);
body.append(main);
